import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Identity } from "@/components/Identity";
import { MobileDock } from "@/components/MobileDock";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Projects } from "@/components/Projects";
import { Proof } from "@/components/Proof";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Identity />
        <Capabilities />
        <Projects />
        <Experience />
        <Proof />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
