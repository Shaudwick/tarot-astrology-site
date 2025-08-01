import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Star, Moon, Sun } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    const formElement = form.current;

    if (!formElement || !captchaToken) {
      alert("Form not valid. Make sure reCAPTCHA is complete.");
      return;
    }

    try {
      const responseToGuest = await emailjs.sendForm(
        "service_6itarzq",
        "template_aybycuf",
        formElement,
        "Kh4L6GyJRqfgckSwt"
      );

      if (!responseToGuest || responseToGuest.status >= 400) {
        throw new Error("Failed to send confirmation email to guest.");
      }

      const responseToAstrologist = await emailjs.sendForm(
        "service_6itarzq",
        "template_fcvr94b",
        formElement,
        "Kh4L6GyJRqfgckSwt"
      );

      if (!responseToAstrologist || responseToAstrologist.status >= 400) {
        throw new Error("Failed to send email to astrologist.");
      }

      setSent(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Email failed. Check your EmailJS setup.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-purple-950 text-white font-serif">
      <header className="p-6 text-center">
        <h1 className="text-5xl font-bold tracking-wide mb-2">Celestial Pathways</h1>
        <p className="text-lg italic text-indigo-300">Tarot • Astrology • Zodiac</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-black/50 shadow-xl rounded-2xl p-6 text-center">
          <Star className="mx-auto text-yellow-300" size={36} />
          <h2 className="text-2xl font-semibold mt-4 mb-2">Tarot Readings</h2>
          <p className="text-sm text-gray-300">
            Gain insight into your spiritual journey and uncover what lies ahead.
          </p>
        </div>
        <div className="bg-black/50 shadow-xl rounded-2xl p-6 text-center">
          <Moon className="mx-auto text-blue-300" size={36} />
          <h2 className="text-2xl font-semibold mt-4 mb-2">Astrology Sessions</h2>
          <p className="text-sm text-gray-300">
            Decode your birth chart and explore planetary alignments.
          </p>
        </div>
        <div className="bg-black/50 shadow-xl rounded-2xl p-6 text-center">
          <Sun className="mx-auto text-orange-300" size={36} />
          <h2 className="text-2xl font-semibold mt-4 mb-2">Zodiac Insights</h2>
          <p className="text-sm text-gray-300">
            Learn your sign compatibility and energetic cycles.
          </p>
        </div>
      </section>

      <section className="p-6 max-w-2xl mx-auto">
        <h3 className="text-3xl text-center font-bold mb-4">Schedule Your Session</h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black/30 p-6 rounded-2xl shadow-lg grid gap-4"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            className="bg-white/10 p-2 rounded text-white placeholder-gray-400"
            required
          />
          <input
            name="user_email"
            placeholder="Email Address"
            type="email"
            className="bg-white/10 p-2 rounded text-white placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="What guidance are you seeking?"
            className="bg-white/10 p-2 rounded text-white placeholder-gray-400 min-h-[120px]"
            required
          />
          <ReCAPTCHA
            sitekey="YOUR_SITE_KEY_HERE"
            onChange={(token) => setCaptchaToken(token)}
            className="mx-auto"
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded"
          >
            Book a Reading
          </button>
        </form>
        {sent && (
          <p className="text-green-300 text-center mt-4">
            ✨ Your request has been received. Check your email.
          </p>
        )}
      </section>

      <footer className="text-center text-sm text-gray-400 py-6">
        &copy; 2025 Celestial Pathways • Readings by Divine Alignment
      </footer>
    </div>
  );
} 