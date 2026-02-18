# Fix: Site Not Showing on whispernuance.com

## The Warning is OK
The warning "Due to `builds` existing..." is **normal** - it just means Vercel is using your `vercel.json` config instead of auto-detecting. This is fine.

## Critical Steps to Fix

### 1. Clear Root Directory in Vercel
**This is the most important step:**

1. Go to [vercel.com](https://vercel.com) → Your project
2. **Settings** → **General**
3. Find **"Root Directory"**
4. **DELETE everything** in that field (make it completely empty)
5. Click **Save**

### 2. Force a New Deployment
After clearing Root Directory:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Wait for it to finish (usually 1-2 minutes)

### 3. Check the Deployment Logs
After redeploying, check:
- Does it say "Building..." then "Ready"?
- Any errors in the build logs?
- Does it show `index.html` in the output files?

### 4. Clear Browser Cache
After deployment completes:
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Or open whispernuance.com in an **incognito/private window**

## What Should Happen
- Root Directory = **empty** (not "standalone", not "tarot-astrology-site", not anything)
- Vercel reads `vercel.json` at repo root
- `vercel.json` tells it to serve `index.html` (Whisper Nuance site)
- whispernuance.com shows the Whisper Nuance site

## If Still Not Working
1. Check Vercel deployment logs for errors
2. Verify `index.html` exists at repo root (it does - we just pushed it)
3. Try visiting the `.vercel.app` URL directly (not just whispernuance.com) to see if it's a DNS issue
4. Make sure whispernuance.com DNS is pointing to Vercel
