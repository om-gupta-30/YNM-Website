# =============================================
# YNM Safety Website — Makefile
# =============================================
# Project: Next.js 15 + Tailwind CSS + Google Sheets + Gemini AI
# Deploy:  GCP Cloud Run (asia-south1)
#
# Pages:   / /about /products /products/fabrication
#          /products/road-safety-furnitures /products/[productId]
#          /clients /contact /get-quote /careers
#          /our-director /investor-relations /foreign-collaborations
#
# APIs:    /api/contact/submit  /api/quote/submit  /api/careers/submit
#          /api/director-appointment/submit  /api/investor-relations/submit
#          /api/foreign-collaborations/submit  /api/chat/gemini
#          /api/places/autocomplete  /api/health
#
# Sheets:  "contact us" | "our director appointment" | "investor relations"
#          "foreign collaborations" | "quote requests"
#
# Run `make help` to see all available targets.
# =============================================

.PHONY: help install dev build start lint clean setup env-check \
        docker-build docker-run deploy check health images

SITE_DIR := site

# ── Help ──────────────────────────────────────

help: ## Show all available targets
	@echo ""
	@echo "  \033[1mYNM Safety Website\033[0m — available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'
	@echo ""

# ── Development ───────────────────────────────

install: ## Install dependencies (npm ci)
	cd $(SITE_DIR) && npm ci

dev: ## Start dev server (http://localhost:3000)
	cd $(SITE_DIR) && npm run dev

build: ## Build for production
	cd $(SITE_DIR) && npm run build

start: ## Start production server (run build first)
	cd $(SITE_DIR) && npm run start

lint: ## Run ESLint
	cd $(SITE_DIR) && npm run lint

clean: ## Remove .next build cache and node_modules
	rm -rf $(SITE_DIR)/.next $(SITE_DIR)/node_modules
	@mkdir -p $(SITE_DIR)/.next/cache

# ── Environment ───────────────────────────────

setup: ## Copy .env.example → .env (edit with your credentials)
	@if [ -f $(SITE_DIR)/.env ]; then \
		echo "\033[1;33m⚠  $(SITE_DIR)/.env already exists. Skipping.\033[0m"; \
	else \
		cp $(SITE_DIR)/.env.example $(SITE_DIR)/.env; \
		echo "\033[0;32m✅ Created $(SITE_DIR)/.env from .env.example\033[0m"; \
		echo "   Edit $(SITE_DIR)/.env with your credentials."; \
	fi

env-check: ## Verify required environment variables are set
	@echo "\033[1mChecking required environment variables...\033[0m"
	@cd $(SITE_DIR) && missing=0; \
	for var in GOOGLE_SHEET_ID GOOGLE_SERVICE_ACCOUNT_EMAIL GOOGLE_PRIVATE_KEY \
	           GOOGLE_GEMINI_API_KEY GMAIL_USER GMAIL_APP_PASSWORD HR_EMAIL \
	           CAREERS_NOREPLY_FROM; do \
		val=$$(grep "^$$var=" .env 2>/dev/null | cut -d'=' -f2-); \
		if [ -z "$$val" ] || [ "$$val" = "" ]; then \
			echo "  \033[0;31m✗ $$var\033[0m (missing or empty)"; \
			missing=$$((missing + 1)); \
		else \
			echo "  \033[0;32m✓ $$var\033[0m"; \
		fi; \
	done; \
	echo ""; \
	echo "\033[1mChecking optional variables...\033[0m"; \
	for var in NEXT_PUBLIC_GA_ID NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; do \
		val=$$(grep "^$$var=" .env 2>/dev/null | cut -d'=' -f2-); \
		if [ -z "$$val" ] || [ "$$val" = "" ]; then \
			echo "  \033[1;33m○ $$var\033[0m (not set — optional)"; \
		else \
			echo "  \033[0;32m✓ $$var\033[0m"; \
		fi; \
	done; \
	echo ""; \
	if [ $$missing -gt 0 ]; then \
		echo "\033[0;31m$$missing required variable(s) missing. Edit $(SITE_DIR)/.env\033[0m"; \
		exit 1; \
	else \
		echo "\033[0;32m✅ All required variables are set.\033[0m"; \
	fi

# ── Quality & Security ───────────────────────

check: ## Run pre-push security checks
	./pre-push-check.sh

images: ## Audit public images (size > 100 KB, bad filenames)
	@echo "\033[1mAuditing images in $(SITE_DIR)/public...\033[0m"
	@echo ""
	@echo "\033[1m1. Files over 100 KB:\033[0m"
	@over=$$(find $(SITE_DIR)/public -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.webp' -o -name '*.gif' \) -size +100k); \
	if [ -z "$$over" ]; then \
		echo "  \033[0;32m✅ All images are under 100 KB\033[0m"; \
	else \
		echo "$$over" | while read f; do echo "  \033[0;31m✗\033[0m $$f ($$(ls -lh "$$f" | awk '{print $$5}'))"; done; \
	fi
	@echo ""
	@echo "\033[1m2. Filenames with capitals, spaces, or special chars:\033[0m"
	@bad=0; find $(SITE_DIR)/public -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.webp' -o -name '*.gif' -o -name '*.svg' \) | while read f; do \
		base=$$(basename "$$f"); \
		if echo "$$base" | grep -qE '[A-Z _()]'; then \
			echo "  \033[0;31m✗ $$f\033[0m"; \
			bad=$$((bad + 1)); \
		fi; \
	done; \
	if [ $$bad -eq 0 ] 2>/dev/null; then echo "  \033[0;32m✅ All filenames are clean\033[0m"; fi
	@echo ""
	@total=$$(find $(SITE_DIR)/public -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.webp' -o -name '*.gif' -o -name '*.svg' \) | wc -l | tr -d ' '); \
	echo "  Total images: $$total"

# ── Docker ────────────────────────────────────

docker-build: ## Build Docker image locally
	docker build \
		--build-arg NEXT_PUBLIC_GA_ID="$${NEXT_PUBLIC_GA_ID}" \
		-t ynm-website $(SITE_DIR)

docker-run: docker-build ## Build & run Docker container (port 3000)
	docker run --rm -p 3000:3000 --env-file $(SITE_DIR)/.env ynm-website

# ── Deployment ────────────────────────────────

deploy: ## Deploy to GCP Cloud Run via Cloud Build
	./deploy-gcp.sh

health: ## Hit the /api/health endpoint (dev server must be running)
	@url="$${VERIFY_BASE_URL:-http://localhost:3000}"; \
	echo "Checking $$url/api/health ..."; \
	response=$$(curl -s -o /dev/null -w "%{http_code}" "$$url/api/health" 2>/dev/null); \
	if [ "$$response" = "200" ]; then \
		echo "\033[0;32m✅ Health check passed (HTTP $$response)\033[0m"; \
	else \
		echo "\033[0;31m✗ Health check failed (HTTP $$response). Is the server running?\033[0m"; \
		exit 1; \
	fi
