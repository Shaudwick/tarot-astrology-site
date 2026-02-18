# Standalone HTML Version — whispernuance.com

This is the **single-file** Whisper Nuance site (Whisper Nuance branding, three sections, package selection). Use this as the live site at **whispernuance.com**.

## 🌐 Deploy this as whispernuance.com (Vercel)

1. Open your project on [Vercel](https://vercel.com) → **Settings** → **General**.
2. Set **Root Directory** to: **`standalone`**
3. Leave **Override** unchecked (use the `standalone` folder as the root).
4. Click **Save**.
5. Go to **Deployments** → open the **⋯** on the latest → **Redeploy**.

After the redeploy, **whispernuance.com** will serve this `index.html` (Whisper Nuance, one-page site).

## 🚀 Other usage

Open `index.html` in your browser, or host the `standalone` folder on GitHub Pages, Netlify, or any static host.

## ✨ Features

- All three pages (Home, Information, Book Reading) in one file
- Smooth scrolling navigation
- Interactive package selection
- Responsive design
- No build process required
- Works offline (after initial load)

## 📝 Notes

- The booking form currently shows a success message but doesn't send emails
- To add email functionality, you'll need to integrate EmailJS or another service
- All styles and scripts are included in the HTML file
- Uses CDN for Tailwind CSS and Lucide Icons

## 🔧 Customization

You can easily customize:
- Colors in the `<style>` section
- Package prices and descriptions
- Content in each section
- Form fields

Just edit the HTML file directly!

