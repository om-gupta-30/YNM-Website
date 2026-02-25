.PHONY: install dev build start lint clean setup check deploy docker-build docker-run help

SITE_DIR := site

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	cd $(SITE_DIR) && npm ci

dev: ## Start dev server (http://localhost:3000)
	cd $(SITE_DIR) && npm run dev

build: ## Build for production
	cd $(SITE_DIR) && npm run build

start: ## Start production server
	cd $(SITE_DIR) && npm run start

lint: ## Run ESLint
	cd $(SITE_DIR) && npm run lint

clean: ## Remove .next and node_modules
	rm -rf $(SITE_DIR)/.next $(SITE_DIR)/node_modules

setup: ## Copy .env.example to .env (edit with your credentials)
	@if [ -f $(SITE_DIR)/.env ]; then \
		echo "\033[1;33m⚠  $(SITE_DIR)/.env already exists. Skipping.\033[0m"; \
	else \
		cp $(SITE_DIR)/.env.example $(SITE_DIR)/.env; \
		echo "\033[0;32m✅ Created $(SITE_DIR)/.env from .env.example\033[0m"; \
		echo "   Edit $(SITE_DIR)/.env with your credentials."; \
	fi

check: ## Run pre-push security checks
	./pre-push-check.sh

deploy: ## Deploy to GCP Cloud Run
	./deploy-gcp.sh

docker-build: ## Build Docker image locally
	docker build \
		--build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY="$${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}" \
		--build-arg NEXT_PUBLIC_GA_ID="$${NEXT_PUBLIC_GA_ID}" \
		-t ynm-website $(SITE_DIR)

docker-run: docker-build ## Build and run Docker container locally
	docker run --rm -p 3000:3000 --env-file $(SITE_DIR)/.env ynm-website
