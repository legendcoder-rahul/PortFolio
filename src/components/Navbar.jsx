import { Link } from "react-router-dom";
import Togglebtn from "./Togglebtn";
const Navbar = () => {

  return (
    <div className="bg-[#b4b4b415] h-16 flex items-center justify-center px-8">
      <nav className="w-full flex justify-between items-center">
        <h1 className="text-3xl ">
          Port<span className="text-blue-500">Folio</span>
        </h1>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-blue-500">Home</Link>
          <Link to="/projects" className="text-white hover:text-blue-500">Projects</Link>
          <Link to="/contact" className="text-white hover:text-blue-500">Contact</Link>
          <Togglebtn />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
