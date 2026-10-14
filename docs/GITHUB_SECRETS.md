# Setting GitHub repository secrets for Render and app env vars

This guide shows how to create the two Render-related GitHub Actions secrets used by the workflow, plus examples for other required env vars (Stripe, email, Twilio). You can add secrets via the GitHub UI or the `gh` CLI.

1) Create a Render API key
- Sign in to Render (https://dashboard.render.com).
- Open Account → API Keys → "New API Key". Name it (e.g. `github-actions`) and copy the secret value. This value is your `RENDER_API_KEY`.

2) Get the Render Service ID
- In the Render dashboard open your Web Service (the service you will deploy).
- Open the "Settings" or "Overview" tab; look for the *Service ID* (sometimes labeled "Internal ID" or visible in the service URL). Copy that value as `RENDER_SERVICE_ID`.
- Alternatively, you can list services via the Render API (requires `RENDER_API_KEY`):

```bash
curl -H "Authorization: Bearer $RENDER_API_KEY" \
  https://api.render.com/v1/services
```

3) Add secrets via the GitHub UI
- Open your repo on github.com → Settings → Secrets and variables → Actions → New repository secret.
- Add these secrets:
  - `RENDER_API_KEY` — the API key from Render
  - `RENDER_SERVICE_ID` — the service ID for your web service
  - `STRIPE_SECRET_KEY` — (optional) Stripe secret key
  - `STRIPE_WEBHOOK_SECRET` — (optional) Stripe webhook secret
  - `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_FROM` — (if using email)
  - `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` — (if using SMS)

4) Add secrets via `gh` CLI (alternative)

Set secrets from your terminal (you will be prompted for the value):

```bash
gh secret set RENDER_API_KEY
gh secret set RENDER_SERVICE_ID
gh secret set STRIPE_SECRET_KEY
gh secret set STRIPE_WEBHOOK_SECRET
gh secret set EMAIL_USER
gh secret set EMAIL_PASS
gh secret set TWILIO_ACCOUNT_SID
gh secret set TWILIO_AUTH_TOKEN
```

Or set a secret from an environment variable in one command:

```bash
echo "$RENDER_API_KEY" | gh secret set RENDER_API_KEY --body -
```

5) Confirming the workflow uses the secrets
- The Actions workflow file `.github/workflows/render-deploy.yml` reads `RENDER_API_KEY` and `RENDER_SERVICE_ID` and triggers a Render deploy.

6) Security notes
- Do not commit secrets or `.env` files to the repo. Use GitHub Secrets for CI and the Render dashboard for runtime env vars.
- When deploying to Render, also set the runtime environment variables in the Render service settings (Render provides an Env section where you can paste `STRIPE_SECRET_KEY`, etc.).

If you'd like, I can:
- add a short checklist file to your repo that you can follow when creating the Render service, or
- run the `gh` commands here to create the repo and set a couple of non-sensitive placeholders (only if you want me to attempt the push). Which would you prefer?
