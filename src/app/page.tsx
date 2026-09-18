import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Showreel from "@/components/Showreel";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import BrandThinking from "@/components/BrandThinking";
import VideoFocus from "@/components/VideoFocus";
import EventStories from "@/components/EventStories";
import Artists from "@/components/Artists";
import PersonalBranding from "@/components/PersonalBranding";
import Design from "@/components/Design";
import Gallery from "@/components/Gallery";
import BehindWork from "@/components/BehindWork";
import Method from "@/components/Method";
import Vision from "@/components/Vision";
import OvStudio from "@/components/OvStudio";
import Collaborations from "@/components/Collaborations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <div className="relative z-10 -rotate-1 scale-105 bg-orange text-ink py-3 border-y-2 border-ink">
          <Marquee
            items={[
              "REAL MAKER MOBILE",
              "BRAND THINKER",
              "OV STUDIO",
              "VIDEO × BRAND THINKING",
            ]}
            className="font-display text-lg md:text-2xl tracking-wide"
          />
        </div>
        <Intro />
        <About />
        <Philosophy />
        <Services />
        <Showreel />
        <Projects />
        <CaseStudy />
        <BrandThinking />
        <VideoFocus />
        <EventStories />
        <Artists />
        <PersonalBranding />
        <Design />
        <Gallery />
        <BehindWork />
        <Method />
        <Vision />
        <OvStudio />
        <Collaborations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
