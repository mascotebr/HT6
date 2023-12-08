import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Countdown } from "@/components/countdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Treino HT6</title>
        <meta name="description" content="Treino HT6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Navbar />
        <Banner />
        <div className="linear-background">
          <div style={{ height: 275 }} />
          <Countdown />
        </div>
      </main>
    </>
  );
}
