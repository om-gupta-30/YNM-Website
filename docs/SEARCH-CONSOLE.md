# Google Search Console – Setup & Reindex

## Verification (Method 1: HTML file)

1. In Search Console, Google shows a **filename** (e.g. `google1a2b3c4d5e6.html`) and the **file content**.
2. **Option A:** Copy the exact filename and content, add to `site/public/`, redeploy.
3. **Option B:** Create the file with the exact name and content Google gave you. Save in `site/public/` so the URL becomes `https://www.ynmsafety.com/googlexxxxx.html`.

## Verification (Method 2: HTML meta tag)

If Google offers **"HTML tag"**:
1. You'll see: `<meta name="google-site-verification" content="ABC123xyz..." />`
2. Send the **content** value; it will be added to the site and redeployed.

---

## Fix "Coming Soon" in Google Results

If Google cached the old "Coming Soon" page:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property `https://www.ynmsafety.com` or `https://ynmsafety.com` if needed
3. **URL Inspection** → Enter `https://www.ynmsafety.com` and `https://ynmsafety.com`
4. Click **Request indexing** for each URL

Updates can show in 1–2 days.
