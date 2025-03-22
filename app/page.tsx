import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Portfolio from "@/components/Portfolio";
import KeyMetrics from "@/components/KeyMetrics";
import Future from "@/components/Future";
import { Footer } from "@/components/Footbar";
import Contact from "@/components/Contact";

export default function Home() {
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
