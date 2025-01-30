import Services from "./components/Home/Services";
import Hero from "./components/Home/Hero";
import DiscoverSection from "./components/Home/DiscoverSection";
import Testimonials from "./components/Home/Testimonials";
import BlogSection from "./components/Home/BlogSection";
import TransformSection from "./components/Home/TransformSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <DiscoverSection />
      <BlogSection />
      <Testimonials />
      <TransformSection />
    </div>
  );
}
