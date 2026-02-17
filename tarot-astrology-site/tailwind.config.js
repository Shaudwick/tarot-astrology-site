module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        mystical: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          indigo: '#6366f1',
          dark: '#0f0f23',
        },
      },
      backgroundImage: {
        'gradient-mystical': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      },
      boxShadow: {
        'mystical': '0 10px 40px rgba(139, 92, 246, 0.3)',
        'mystical-lg': '0 20px 60px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
}; 