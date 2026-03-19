# Deploy to GCP Cloud Run (Docker only)

**One command. ~12–15 min total.**

```bash
cd site && ./deploy-docker.sh
```

**Requirements:** Docker Desktop running, `gcloud` logged in.

**Why it takes time:**
- `npm ci` + `npm run build` = 8–10 min
- `docker push` = 2–3 min  
- `gcloud run deploy` = 1–2 min

Run it in your own terminal (not Cursor) so it isn’t killed by timeouts.
