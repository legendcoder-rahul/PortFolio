import { Link } from "react-router-dom";
import Togglebtn from "./Togglebtn";
import CardNav from '../components/CardNav'
const Navbar = () => {

  return (
    <div className="bg-[#b4b4b415] h-16 flex items-center justify-center px-8 ">
      <nav className="w-full flex justify-between items-center ">
        <CardNav />
        <h1 className="text-3xl ">
          Port<span className="text-blue-500">Folio</span>
        </h1>
        <Togglebtn/>
      </nav>
    </div>
  );
};
<div className='flex justify-center items-center h-full'>
  <CardNav />
</div>
export default Navbar;
