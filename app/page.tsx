"use client";

import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Portfolio from "@/components/Portfolio";
import KeyMetrics from "@/components/KeyMetrics";
import Future from "@/components/Future";
import { Footer } from "@/components/Footbar";
import Contact from "@/components/Contact";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      // ✅ Correct Type
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Stack />
      <Portfolio />
      <KeyMetrics />
      <Future />
      <Contact />
      <Footer />
    </>
  );
}
