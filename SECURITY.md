# 🔒 Security Guidelines - YNM Mega Industries

## Quick Rules

| ✅ DO | ❌ DON'T |
|-------|---------|
| Store secrets in `.env.local` | Commit `.env.local` to git |
| Add secrets to Vercel/GCP dashboard | Hardcode API keys in code |
| Use `.env.example` for templates | Put real values in `.env.example` |
| Rotate keys if exposed | Ignore GitHub security alerts |

---

## Environment Variables Setup

### Local Development

1. Copy the template:
   ```bash
   cp site/.env.example site/.env.local
   ```

2. Fill in your actual values in `.env.local`

3. **NEVER** commit `.env.local` - it's gitignored

### Production (Vercel/GCP)

Add environment variables in the platform's dashboard:
- **Vercel**: Project Settings → Environment Variables
- **GCP Cloud Run**: Service → Edit → Variables & Secrets

---

## Security Features in This Project

### 1. Pre-commit Hook (Automatic)
Every commit is scanned for:
- API keys (Google, AWS, OpenAI, etc.)
- Private keys
- Passwords
- Service account credentials

**If secrets are detected, the commit is BLOCKED.**

### 2. GitHub Actions Security Scan
Every push/PR triggers a Gitleaks scan that:
- Scans entire codebase for secrets
- Fails the build if secrets are found
- Alerts you immediately

### 3. Comprehensive .gitignore
Blocks all common secret file patterns:
- `.env*` files (except `.env.example`)
- `*.pem`, `*.key` certificates
- `credentials.json`, service account files

---

## If Secrets Are Leaked

### Step 1: Revoke Immediately
1. **Google Cloud** → IAM → Service Accounts → Delete key
2. **Google AI Studio** → Delete API key
3. **Gmail** → App Passwords → Revoke

### Step 2: Create New Credentials
Generate completely new keys/passwords

### Step 3: Update `.env.local`
Replace old values with new ones

### Step 4: Clean Git History (if needed)
```bash
# Install BFG
brew install bfg

# Remove file from all history
bfg --delete-files .env.local

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (will require collaborator notification)
git push --force
```

### Step 5: Contact GitHub
Request cache purge: https://support.github.com

---

## Required Environment Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `GOOGLE_SHEET_ID` | Google Sheet for forms | Sheet URL |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email | GCP Console |
| `GOOGLE_PRIVATE_KEY` | Service account key | GCP Console |
| `GOOGLE_GEMINI_API_KEY` | AI chatbot | AI Studio |
| `GMAIL_USER` | Email sender | Your Gmail |
| `GMAIL_APP_PASSWORD` | App password | Google Account |
| `HR_EMAIL` | HR notifications | Your HR email |

---

## Testing the Pre-commit Hook

```bash
# This should be BLOCKED:
echo "API_KEY=AIzaSyTest1234567890123456789012345" > test-secret.txt
git add test-secret.txt
git commit -m "test"  # Should fail!

# Clean up
rm test-secret.txt
```

---

## Questions?

Contact: [Your security contact]
