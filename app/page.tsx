import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/Services";
import Pricings from "@/components/Pricings";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { ParallaxDivider } from "@/components/ParallaxDivider";

import ChatBot from "@/components/ChatBot";


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        {/* <WhatsAppIcon /> */}
        <ChatBot />
        <ParallaxDivider />
        <Services />
        <Pricings />
        {/* <Differentials /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
