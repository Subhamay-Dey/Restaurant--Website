'use client'
import Footer1 from "@/components/footer/Footer1";
// import Footer from "@/components/Footer2";
import Intro from "@/components/footer/Intro";
import { useEffect } from "react";
import Lenis from 'lenis';

export default function Footer() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Footer />
    </main>
  );
}