#!/bin/bash
# Pre-push security check script
# Run this before pushing to GitHub/Vercel/GCP

echo "🔒 YNM Safety - Pre-Push Security Check"
echo "========================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0

# 1. Check if .env is gitignored
echo "1️⃣  Checking .env is gitignored..."
if git check-ignore site/.env > /dev/null 2>&1; then
    echo -e "${GREEN}✅ site/.env is properly gitignored${NC}"
else
    echo -e "${RED}❌ WARNING: site/.env is NOT gitignored!${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 2. Check only .env.example files are tracked
echo ""
echo "2️⃣  Checking only .env.example files are tracked..."
ENV_FILES=$(git ls-files | grep '\.env' | grep -v '\.env\.example' | grep -v '\.env\.gcp\.example')
if [ -z "$ENV_FILES" ]; then
    echo -e "${GREEN}✅ Only .env.example files are tracked${NC}"
else
    echo -e "${RED}❌ ERROR: Sensitive .env files are tracked:${NC}"
    echo "$ENV_FILES"
    ERRORS=$((ERRORS + 1))
fi

# 3. Check no sensitive files are staged
echo ""
echo "3️⃣  Checking no sensitive files are staged..."
STAGED_ENV=$(git diff --cached --name-only 2>/dev/null | grep -E '\.env' | grep -v '\.env\.example' | grep -v '\.env\.gcp\.example')
if [ -z "$STAGED_ENV" ]; then
    echo -e "${GREEN}✅ No sensitive files staged${NC}"
else
    echo -e "${RED}❌ ERROR: Sensitive files are staged:${NC}"
    echo "$STAGED_ENV"
    echo -e "${YELLOW}Run: git reset HEAD <file>${NC}"
    ERRORS=$((ERRORS + 1))
fi

# 4. Check for common secret patterns in staged files
echo ""
echo "4️⃣  Checking for hardcoded secrets in staged files..."
if command -v gitleaks &> /dev/null; then
    if gitleaks detect --source . --no-git --quiet 2>/dev/null; then
        echo -e "${GREEN}✅ No secrets detected by Gitleaks${NC}"
    else
        echo -e "${YELLOW}⚠️  Gitleaks found potential secrets. Review output above.${NC}"
        echo -e "${YELLOW}   (Some may be false positives - verify manually)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Gitleaks not installed. Install: brew install gitleaks${NC}"
fi

# 5. Verify build passes
echo ""
echo "5️⃣  Verifying production build..."
cd site
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Production build successful${NC}"
else
    echo -e "${RED}❌ Build failed. Run 'cd site && npm run build' to see errors${NC}"
    ERRORS=$((ERRORS + 1))
fi
cd ..

# 6. Check for large files
echo ""
echo "6️⃣  Checking for large files (>10MB)..."
LARGE_FILES=$(git diff --cached --name-only 2>/dev/null | xargs ls -lh 2>/dev/null | awk '$5 ~ /[0-9]+M/ && $5+0 > 10 {print $9, $5}')
if [ -z "$LARGE_FILES" ]; then
    echo -e "${GREEN}✅ No large files staged${NC}"
else
    echo -e "${YELLOW}⚠️  Large files found (consider compressing):${NC}"
    echo "$LARGE_FILES"
fi

# Summary
echo ""
echo "========================================"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed! Safe to push.${NC}"
    exit 0
else
    echo -e "${RED}❌ $ERRORS critical error(s) found. Fix before pushing!${NC}"
    exit 1
fi
