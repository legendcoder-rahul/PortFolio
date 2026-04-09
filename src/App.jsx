import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";


const App = () => {
  return (
    <div className="bg-[#0a0a0a] w-full h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <Contact /> */}
        <Footer />

    </div>
  );
};

export default App;
