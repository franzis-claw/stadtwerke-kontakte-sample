# Deployment Guide

## GitHub Repository
✅ **Live at:** https://github.com/franzis-claw/stadtwerke-kontakte-sample

## Railway Deployment (2 Options)

### Option 1: One-Click Deploy (Easiest)
1. Go to https://railway.app/new
2. Click "Deploy from GitHub repo"
3. Connect GitHub account (franzis-claw or Franzi-4)
4. Select repository: `franzis-claw/stadtwerke-kontakte-sample`
5. Railway will auto-detect `railway.json` and deploy
6. Done! You'll get a URL like `stadtwerke-sample.up.railway.app`

### Option 2: CLI Deploy
```bash
# Login to Railway
railway login

# Link to project (or create new)
cd ~/.openclaw/workspace/stadtwerke-kontakte-sample
railway init

# Deploy
railway up
```

## Environment Variables
None required - the app serves static files only.

## What Gets Deployed
- Node.js Express server (`server.js`)
- Frontend: `index.html` with card + table views
- Data: `data.csv` (5 sample Stadtwerke entries)
- API endpoint: `/api/data` (returns CSV as JSON)

## After Deployment
1. Visit the Railway URL
2. Test card view (default)
3. Test table view (click "Tabellenansicht")
4. Test CSV download
5. Test API: `https://YOUR-URL.railway.app/api/data`

## Custom Domain (Optional)
In Railway dashboard:
- Settings → Domains → Add Custom Domain
- Configure DNS: CNAME record pointing to Railway

## Cost
- Railway Free Tier: 500 hours/month (plenty for demo)
- No credit card required for starter plan

---

**Status:** GitHub ✅ | Railway ⏳ (needs login)
**Live Demo:** Coming soon!
