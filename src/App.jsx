import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import DarkVeil from "./components/DarkVeil";

const App = () => {
  return (
    <div className="relative w-full">
      {/* 🔥 Aurora Background  */}
      <div className="fixed inset-0 -z-10">
       <DarkVeil/>
      </div> 

      {/* 🧱 Foreground UI */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
