import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/error.json")
      .then(res => res.json())
      .then(data => setAnimationData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6 text-gray-300">Oops! Page not found</p>

      {animationData && (
        <Lottie 
          animationData={animationData} 
          loop={true} 
          style={{ width: 300 }}
        />
      )}

      <Link 
        to="/" 
        className="mt-6 px-6 py-2 bg-gray-500 rounded-lg hover:bg-cyan-600"
      >
        Go Home
      </Link>
    </div>
  );
}