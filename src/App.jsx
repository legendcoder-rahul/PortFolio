import React from "react";
import DarkVeil from "./components/DarkVeil";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

    
      <div className="fixed inset-0 ">
        <DarkVeil />
      </div>

      {/* UI */}
      <div className="relative z-10">
        <Navbar />
        <Hero/>
      </div>

    </div>
  );
};

export default App;
