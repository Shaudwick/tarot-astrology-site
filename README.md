# Your Lovely Astrologist - Tarot Card Reading Website

A modern, mystical tarot card reading website featuring beautiful gradients, glassmorphism effects, and a complete booking system.

## 📁 Project Structure

This repository contains two versions of the website:

### 1. Next.js Version (`/tarot-astrology-site`)
A full-featured Next.js application with React components, routing, and EmailJS integration.

**To run:**
```bash
cd tarot-astrology-site
npm install
npm run dev
```

### 2. Standalone HTML Version (`/standalone`)
A single HTML file that works without any build process. Perfect for quick deployment or GitHub Pages.

**To use:**
Simply open `standalone/index.html` in a web browser or host it on any static hosting service.

## 🌟 Features

- **Three Main Sections:**
  - **Home**: Beautiful hero section with features and call-to-action
  - **Information**: Comprehensive tarot card knowledge and guides
  - **Book Reading**: Complete booking system with two reading packages

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

## 🚀 Quick Start

### For Next.js Version:
```bash
cd tarot-astrology-site
npm install
npm run dev
```

### For Standalone Version:
Just open `standalone/index.html` in your browser!

## 📝 Configuration

### EmailJS Setup (Next.js Version Only)

The booking form uses EmailJS to send booking requests. To configure:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email templates
3. Update the service ID and template IDs in `tarot-astrology-site/pages/contact.jsx`

## 🎨 Technologies

- **Next.js 13** - React framework (Next.js version)
- **React 18** - UI library (Next.js version)
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Icon library
- **EmailJS** - Email service integration (Next.js version)

## 📱 Pages

### Home
- Hero section with gradient text
- Feature cards (Daily, Weekly, Monthly readings)
- Call-to-action sections

### Information
- What is Tarot section
- Major Arcana cards
- Minor Arcana suits
- How tarot readings work

### Book Reading
- Two reading packages with pricing
- Interactive package selection
- Booking form
- Form validation

## 📄 License

MIT License

## 👤 Author

Your Lovely Astrologist

---

**Note**: The standalone HTML version is ready to use immediately. The Next.js version requires EmailJS configuration for the booking form to work properly.
