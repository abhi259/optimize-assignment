import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import FontShowcase from "./components/FontShowcase";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
