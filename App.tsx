import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Collections from "./components/Collections";
import Sommelier from "./components/Sommelier";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Collections />
      <Sommelier />
    </div>
  );
}
