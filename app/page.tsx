import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stack></Stack>
      <Portfolio></Portfolio>
    </>
  );
}
