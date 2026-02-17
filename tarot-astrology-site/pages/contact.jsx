import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar, Clock, Sparkles, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const packages = [
    {
      id: 'weekly',
      name: 'Weekly Reading',
      price: '33.33',
      duration: '20 minutes',
      description: 'Perfect for weekly insights and guidance. Get clarity on immediate questions and short-term opportunities.',
      features: [
        '20-minute personalized reading',
        'Weekly guidance and insights',
        '3-card spread',
        'Email delivery of reading',
        'Follow-up questions via email',
      ],
      popular: false,
    },
    {
      id: 'monthly',
      name: 'Monthly Reading',
      price: '55.55',
      duration: '1 hour',
      description: 'Comprehensive monthly forecast with deep insights into the patterns and energies shaping your month ahead.',
      features: [
        '1-hour comprehensive reading',
        'Full month forecast',
        'Celtic Cross spread (10 cards)',
        'Detailed written report',
        'Email delivery + optional video call',
        'Priority support',
      ],
      popular: true,
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!selectedPackage) {
      setError('Please select a reading package');
      setLoading(false);
      return;
    }

    const formElement = form.current;
    if (!formElement) {
      setError('Form not found');
      setLoading(false);
      return;
    }

    try {
      // Add selected package info to form data
      const packageInfo = packages.find(p => p.id === selectedPackage);
      const formData = new FormData(formElement);
      formData.append('package_name', packageInfo.name);
      formData.append('package_price', packageInfo.price);
      formData.append('package_duration', packageInfo.duration);

      const responseToGuest = await emailjs.sendForm(
        'service_6itarzq',
        'template_aybycuf',
        formElement,
        'Kh4L6GyJRqfgckSwt'
      );

      if (!responseToGuest || responseToGuest.status >= 400) {
        throw new Error('Failed to send confirmation email to guest.');
      }

      // Send to astrologist at c_route@yahoo.com
      // Note: Configure EmailJS template_fcvr94b to send to c_route@yahoo.com
      const responseToAstrologist = await emailjs.sendForm(
        'service_6itarzq',
        'template_fcvr94b',
        formElement,
        'Kh4L6GyJRqfgckSwt'
      );

      if (!responseToAstrologist || responseToAstrologist.status >= 400) {
        throw new Error('Failed to send email to astrologist.');
      }

      setSent(true);
      formElement.reset();
      setSelectedPackage(null);
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send booking request. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 via-purple-950 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
              <Calendar className="text-purple-300" size={20} />
              <span className="text-purple-200 text-sm font-medium">Book Your Reading</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Schedule Your Session
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect reading package for your spiritual journey and let the cards reveal what the universe has in store for you.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-gradient-to-br ${
                  pkg.popular
                    ? 'from-purple-900/40 to-pink-900/40 border-purple-400/50'
                    : 'from-indigo-900/30 to-purple-900/30 border-purple-500/30'
                } backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 ${
                  selectedPackage === pkg.id ? 'ring-4 ring-purple-400/50 scale-105' : ''
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-purple-200">{pkg.name}</h3>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPackage === pkg.id
                      ? 'bg-purple-500 border-purple-400'
                      : 'border-gray-400'
                  }`}>
                    {selectedPackage === pkg.id && (
                      <CheckCircle className="text-white" size={16} />
                    )}
                  </div>
                </div>
                
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    ${pkg.price}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-300 mb-6">
                  <Clock size={18} />
                  <span>{pkg.duration}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{pkg.description}</p>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Sparkles className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-200">
              Complete Your Booking
            </h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-2">
                <XCircle className="text-red-400" size={20} />
                <p className="text-red-300">{error}</p>
              </div>
            )}
            
            {sent && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2">
                <CheckCircle className="text-green-400" size={20} />
                <p className="text-green-300">
                  ✨ Your booking request has been received! We'll contact you shortly to confirm your reading.
                </p>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Your Name *</label>
                <input
                  name="user_name"
                  type="text"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                <input
                  name="user_email"
                  type="email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Phone Number (Optional)</label>
                <input
                  name="user_phone"
                  type="tel"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">
                  What guidance are you seeking? *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your question, concerns, or what you'd like to explore in your reading..."
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Preferred Date & Time</label>
                <input
                  name="preferred_date"
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="e.g., Weekday evenings, Weekend mornings, etc."
                />
              </div>

              {selectedPackage && (
                <div className="p-4 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                  <p className="text-sm text-gray-300 mb-1">Selected Package:</p>
                  <p className="font-semibold text-purple-200">
                    {packages.find(p => p.id === selectedPackage)?.name} - ${packages.find(p => p.id === selectedPackage)?.price}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !selectedPackage}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Booking Request</span>
                    <Sparkles size={20} />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              After submitting, we'll contact you within 24 hours to confirm your reading time and provide payment details.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Your Lovely Astrologist • Mystical Guidance Through Tarot</p>
        </div>
      </footer>
    </div>
  );
}

