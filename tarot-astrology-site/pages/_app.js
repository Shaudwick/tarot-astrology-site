import "../styles/globals.css";
import Head from "next/head";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Whisper Nuance — Tarot Card Readings | whispernuance.com</title>
        <meta name="description" content="Professional tarot readings by Whisper Nuance. Daily, weekly, and monthly guidance. Book your session at whispernuance.com." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://whispernuance.com" />
        <link rel="icon" href="🔮" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
} 