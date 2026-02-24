.PHONY: install dev build start lint clean deploy docker-build docker-run help

SITE_DIR := site

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	cd $(SITE_DIR) && npm ci

dev: ## Start dev server
	cd $(SITE_DIR) && npm run dev

build: ## Build for production
	cd $(SITE_DIR) && npm run build

start: ## Start production server
	cd $(SITE_DIR) && npm run start

lint: ## Run ESLint
	cd $(SITE_DIR) && npm run lint

clean: ## Remove .next and node_modules
	rm -rf $(SITE_DIR)/.next $(SITE_DIR)/node_modules

deploy: ## Deploy to GCP Cloud Run
	./deploy-gcp.sh

docker-build: ## Build Docker image locally
	docker build -t ynm-website $(SITE_DIR)

docker-run: docker-build ## Build and run Docker container locally
	docker run --rm -p 3000:3000 --env-file $(SITE_DIR)/.env ynm-website
