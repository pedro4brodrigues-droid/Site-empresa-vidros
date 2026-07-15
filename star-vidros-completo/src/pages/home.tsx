import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsappButton } from "@/components/layout/WhatsappButton";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
