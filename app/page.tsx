import Header from "@/components/Header";
import Prout from "@/components/Prout";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import JokePreview from "@/components/JokePreview";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <Prout />
      <Features />
      <HowItWorks />
      <JokePreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
