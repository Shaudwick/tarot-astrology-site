# Whisper Nuance — Tarot Card Reading Website

**Website:** [whispernuance.com](https://whispernuance.com)  
**Contact:** Whissspernuance@gmail.com

A modern, mystical tarot booking site built with Next.js: choose a reading, pick a date & time (Mon–Thu, 8am–11am), and complete your booking. Owner gets notified at Whissspernuance@gmail.com; clients receive an email confirming their chosen date and time.

## 🌟 Features

- **Three main sections:** Home, Information (tarot knowledge), Book Reading (multi-step booking)
- **Reading packages:**
  - **Daily Reading**: $11.11 — 15–20 min (same-day possible, subject to approval)
  - **Weekly Reading**: $33.33 — 30 min (book 7+ days ahead)
  - **Monthly Reading**: $55.55 — 1 hour (book 7+ days ahead)
- **Booking flow:** Choose package → Calendar (Mon–Thu only; Fri–Sun grayed out) + time (8am–11am) → Form → Owner & customer emails

- **Modern Design:**
  - Mystical gradient backgrounds (purple, pink, indigo)
  - Glassmorphism effects with backdrop blur
  - Smooth animations and hover effects
  - Fully responsive design (mobile & desktop)
  - Custom scrollbar styling
  - Navigation bar with active state indicators

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tarot-astrology-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

### Deploying to Vercel (whispernuance.com)

1. In Vercel, open your project → **Settings** → **General**.
2. Set **Root Directory** to `tarot-astrology-site` (so Vercel builds the Next.js app, not a static page).
3. Under **Domains**, add `whispernuance.com` and point your domain’s DNS to Vercel as instructed.
4. Redeploy (e.g. push to `main` or click **Redeploy**). You should see **Whisper Nuance**, not the old static site.

## 📁 Project Structure

```
tarot-astrology-site/
├── components/
│   └── Navigation.jsx          # Navigation component with mobile menu
├── pages/
│   ├── _app.js                 # Next.js app wrapper with navigation
│   ├── index.jsx               # Home page
│   ├── information.jsx         # Tarot information page
│   └── contact.jsx             # Booking/Contact page
├── styles/
│   └── globals.css             # Global styles and animations
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## 🔧 Configuration

### EmailJS Setup

The booking form uses EmailJS to send booking requests. To configure:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email templates for:
   - Guest confirmation (template_aybycuf)
   - Astrologist notification (template_fcvr94b)
3. Update the service ID and template IDs in `pages/contact.jsx`:
   - Service ID: `service_6itarzq`
   - Public Key: `Kh4L6GyJRqfgckSwt`

## 🎨 Technologies Used

- **Next.js 13** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **EmailJS** - Email service integration

## 📱 Pages

### Home (`/`)
- Hero section with gradient text
- Feature cards (Daily, Weekly, Monthly readings)
- Call-to-action sections

### Information (`/information`)
- What is Tarot section
- Major Arcana cards (10 featured)
- Minor Arcana suits (Cups, Wands, Swords, Pentacles)
- How tarot readings work

### Book Reading (`/contact`)
- Two reading packages with pricing
- Interactive package selection
- Booking form with EmailJS integration
- Form validation and error handling

## 🎯 Key Features

- **Responsive Navigation**: Fixed navigation bar with mobile menu
- **Package Selection**: Interactive package cards with visual feedback
- **Form Handling**: Complete form validation and email submission
- **Modern UI**: Glassmorphism, gradients, and smooth animations
- **Accessibility**: Semantic HTML and proper form labels

## 📝 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  mystical: {
    purple: '#8b5cf6',
    pink: '#ec4899',
    indigo: '#6366f1',
    dark: '#0f0f23',
  },
}
```

### Packages
Update reading packages in `pages/contact.jsx`:
```javascript
const packages = [
  {
    id: 'daily-weekly',
    name: 'Daily/Weekly Reading',
    price: '11.11',
    // ... more options
  }
]
```

## 📄 License

MIT License

## 👤 Author

Your Lovely Astrologist

---

**Note**: Make sure to configure EmailJS with your own service IDs and template IDs before deploying to production.
