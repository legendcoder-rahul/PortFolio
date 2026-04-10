import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Tumhare existing imports
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import Contributions from './components/GithubContribution'

const App = () => {
  return (
    <div className="bg-[#0a0a0a] w-full min-h-screen">
      <Router>
        <Routes>
          
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Contributions />
                <Projects />
                {/* <Contact /> */}
                <Footer />
              </>
            } 
          />

          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;