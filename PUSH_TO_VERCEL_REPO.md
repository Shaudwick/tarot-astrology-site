# Push to Vercel-Connected Repo (tarot-astrology-site)

Vercel is connected to: **github.com/Shaudwick/tarot-astrology-site**

Your code is in **YourLovelyAstrologist**. To get the Whisper Nuance site live, push this repo’s content into **tarot-astrology-site**.

## Option 1: Push from this folder (recommended)

In Terminal, from this project folder:

```bash
cd /Users/shaudy/Desktop/YourLovelyAstrologist

# Add the Vercel repo (if not already added), or switch to HTTPS:
git remote add vercel-repo https://github.com/Shaudwick/tarot-astrology-site.git 2>/dev/null || true
git remote set-url vercel-repo https://github.com/Shaudwick/tarot-astrology-site.git

# Push main to it (GitHub will ask for login or token)
git push vercel-repo main
```

If it asks for a password, use a **Personal Access Token**, not your GitHub password.

---

## Option 2: If vercel-repo already exists and uses SSH

```bash
cd /Users/shaudy/Desktop/YourLovelyAstrologist
git push vercel-repo main
```

If SSH fails, switch the remote to HTTPS and push again:

```bash
git remote set-url vercel-repo https://github.com/Shaudwick/tarot-astrology-site.git
git push vercel-repo main
```

---

## After pushing

1. Vercel will deploy from **tarot-astrology-site**.
2. In Vercel → **Settings** → **General** → leave **Root Directory** empty.
3. Your site (root `index.html` + `vercel.json`) will be served.

**Do not put your token in any file or share it in chat.** Use it only when Git prompts for a password.
