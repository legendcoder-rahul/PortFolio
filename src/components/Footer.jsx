import logo from '../assets/logo.png'

const Footer = () => {

  return (
    <div className='bg-[#0a0a0a] w-full h-screen text-white relative'>
      <div className='w-[90%]  flex gap-15 pt-10 text-xl mx-auto'>
      <div>
        <h4 className='text-[#9e9e9e]'>Contact</h4>
        <p>rahul251035@gmail.com</p>

        <ul className='mt-10 flex flex-col gap-2'>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div>
        <h4 className='text-[#9e9e9e]'>Navigation</h4>
        <ul className='mt-15 flex flex-col gap-2'>
          <li>Services</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>

      <hr className='absolute bottom-1/3 w-full border-t border-gray-700'/>

      <div className='absolute bottom-0 left-0 w-full h-1/3 flex items-center justify-center p-0 m-0 overflow-hidden'>
        <img className='invert object-contain p-0 m-0' src={logo} alt="Logo" />
      </div>
    </div>
  )
}

export default Footer