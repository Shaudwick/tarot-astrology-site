# Your Lovely Astrologist - Tarot Card Reading Website

A modern, mystical tarot card reading website built with Next.js, featuring beautiful gradients, glassmorphism effects, and a complete booking system.

## 🌟 Features

- **Three Main Sections:**
  - **Home Page**: Beautiful hero section with features and call-to-action
  - **Information Page**: Comprehensive tarot card knowledge, Major Arcana, Minor Arcana, and reading guides
  - **Book Reading Page**: Complete booking system with two reading packages

- **Reading Packages:**
  - **Daily/Weekly Reading**: $11.11 - 20-minute personalized reading
  - **Monthly Reading**: $33.33 - 1-hour comprehensive monthly forecast

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
