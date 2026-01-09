import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contect from "./pages/Contact";
import Hero from "./pages/Hero";
import Aurora from "./components/Aurora";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🔥 Aurora Background */}
      <div className="fixed inset-0 -z-10">
        <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>
      </div>

      {/* 🧱 Foreground UI */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Contect />
        <Footer />
      </div>

    </div>
  );
};

export default App;
