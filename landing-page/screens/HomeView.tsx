import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomeView() {
  return (
    <div className="min-h-screen bg-bg text-fg antialiased">
      <Nav />
      <main>
        <Hero />
        <Offerings />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
