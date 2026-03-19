#!/bin/bash
# YNM Website - Docker-only deploy to GCP Cloud Run
# Requires: Docker running, gcloud CLI authenticated
# Takes ~12-15 min: build 8-10min, push 2-3min, deploy 1-2min

set -e

PROJECT_ID="gen-lang-client-0473608308"
SERVICE_NAME="ynm-website"
REGION="asia-south1"
IMAGE="${REGION}-docker.pkg.dev/${PROJECT_ID}/cloud-run-source-deploy/${SERVICE_NAME}:$(date +%Y%m%d-%H%M%S)"

echo "=== 1/4 Building Docker image (8-10 min) ==="
docker build \
  --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY="${NEXT_PUBLIC_RECAPTCHA_SITE_KEY:-}" \
  --build-arg NEXT_PUBLIC_GA_ID="${NEXT_PUBLIC_GA_ID:-G-KXRFYK5QTK}" \
  -t "$IMAGE" \
  .

echo "=== 2/4 Configuring Docker for Artifact Registry ==="
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet --project="$PROJECT_ID"

echo "=== 3/4 Pushing image (2-3 min) ==="
docker push "$IMAGE"

echo "=== 4/4 Deploying to Cloud Run (1-2 min) ==="
gcloud run deploy "$SERVICE_NAME" \
  --image "$IMAGE" \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated \
  --port 3000 \
  --project "$PROJECT_ID" \
  --set-secrets "GOOGLE_SHEET_ID=ynm-website_GOOGLE_SHEET_ID:latest,GOOGLE_SERVICE_ACCOUNT_EMAIL=ynm-website_GOOGLE_SERVICE_ACCOUNT_EMAIL:latest,GOOGLE_PRIVATE_KEY=ynm-website_GOOGLE_PRIVATE_KEY:latest,GOOGLE_GEMINI_API_KEY=ynm-website_GOOGLE_GEMINI_API_KEY:latest,GMAIL_USER=ynm-website_GMAIL_USER:latest,GMAIL_APP_PASSWORD=ynm-website_GMAIL_APP_PASSWORD:latest,HR_EMAIL=ynm-website_HR_EMAIL:latest,CAREERS_NOREPLY_FROM=ynm-website_CAREERS_NOREPLY_FROM:latest,RECAPTCHA_SECRET_KEY=ynm-website_RECAPTCHA_SECRET_KEY:latest,GOOGLE_MAPS_API_KEY=ynm-website_GOOGLE_MAPS_API_KEY:latest"

echo "=== Done. Service: https://ynm-website-pakkgz6r2q-el.a.run.app ==="
