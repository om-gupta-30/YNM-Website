#!/bin/bash
# ==============================================
# YNM SAFETY - GCP Cloud Run Deployment Script
# ==============================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ID="gen-lang-client-0473608308"
SERVICE_NAME="ynm-website"
REGION="asia-south1"

# Public environment variables (safe to pass as build args)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="6LeXgGYsAAAAAC1XWMf29FKDTRV-dfobscTkGo8J"
NEXT_PUBLIC_GA_ID="G-KXRFYK5QTK"

echo -e "${GREEN}🚀 Deploying YNM Safety Website to GCP Cloud Run${NC}"
echo "=================================================="
echo "Project: ${PROJECT_ID}"
echo "Service: ${SERVICE_NAME}"
echo "Region: ${REGION}"
echo ""

# Navigate to site directory
cd site

echo -e "${YELLOW}📦 Building with Cloud Build (with proper build args)...${NC}"

# Submit build with cloudbuild.yaml
gcloud builds submit . \
  --config=cloudbuild.yaml \
  --region=${REGION} \
  --project=${PROJECT_ID} \
  --substitutions=_SERVICE_NAME=${SERVICE_NAME},_REGION=${REGION},_NEXT_PUBLIC_RECAPTCHA_SITE_KEY=${NEXT_PUBLIC_RECAPTCHA_SITE_KEY},_NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Service URL: https://${SERVICE_NAME}-822693677008.${REGION}.run.app"
echo ""
echo -e "${YELLOW}Note:${NC} If you're using a custom domain (ynmsafety.com),"
echo "make sure to add it to your reCAPTCHA allowed domains at:"
echo "https://www.google.com/recaptcha/admin"
