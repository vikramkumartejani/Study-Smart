import Services from "./components/Home/Services";
import Hero from "./components/Home/Hero";
import DiscoverSection from "./components/Home/DiscoverSection";
import Testimonials from "./components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <DiscoverSection />
      <Testimonials />
    </div>
  );
}
