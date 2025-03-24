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
    function raf(time: any){
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, [])
  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stack></Stack>
      <Portfolio></Portfolio>
      <KeyMetrics></KeyMetrics>
      <Future></Future>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
