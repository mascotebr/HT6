import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Countdown } from "@/components/countdown";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { Vitafor } from "@/components/vitafor";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import useResponsive from "@/utils/responsive";
import { ModalForms } from "@/components/modal";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [modalShow, setModalShow] = useState(false);
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
        <Banner open={setModalShow}/>
        <div className="linear-background">
         {useResponsive() == 'desktop' ?   <div style={{ height: 275 }} /> : <div style={{ height: 75 }} />}
          <Countdown />
          <About />
          <hr />
          <Testimonials />
          <Vitafor />
          <CTA open={setModalShow} />
        </div>
        <ModalForms show={modalShow} onHide={() => setModalShow(false)}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
