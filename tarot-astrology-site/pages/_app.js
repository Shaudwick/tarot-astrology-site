import "../styles/globals.css";
import Head from "next/head";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your Lovely Astrologist - Tarot Card Readings</title>
        <meta name="description" content="Professional tarot card readings for daily, weekly, and monthly guidance. Book your mystical journey today." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="🔮" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
} 