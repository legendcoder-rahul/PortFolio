import { FaLongArrowAltUp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-white mt-10 text-black mx-6 rounded-t-2xl flex px-2 py-2 justify-center items-center gap-2'>
      <div className="flex justify-center items-center text-[12px]">Back to the top<FaLongArrowAltUp /></div>
      <div>
        <p className='text-[12px]'>&copy; 2026 All Right REserved Design & Developed By Rahul</p>
      </div>
    </div>
  )
}

export default Footer
 