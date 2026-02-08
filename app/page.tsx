import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FeatureCarousel from "@/components/FeatureCarousel";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="pt-16">
      <Header/>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}