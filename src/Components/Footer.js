import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <div className='relative'>
    <div onClick={handleScrollTop} className="absolute right-0 -top-20 mx-2 cursor-pointer z-30 text-logoColor w-fit">
      <div className="flex justify-center">
        <Icon name='arrow alternate circle up' size='huge' />
      </div>
    </div>
    <div className='bg-headingColor w-screen pt-6 px-4 laptop:px-10'>
      <div className="flex flex-col laptop:flex-row justify-between space-y-10 laptop:space-y-0">
        <div className="space-y-1">
          <p className="text-2xl text-white font-bold">Upload2Sketch</p>
          <p className="text-lg text-[#aaa6c3]">TRANSFORM YOUR PHOTOS INTO STUNNING PENCIL SKETCHES WITH UPLOAD2SKETCH</p>
          <p className="text-base text-white pt-10">FOLLOW US ON</p>
          <div className="flex py-2 space-x-2">
            <a href="https://facebook.com" rel="noopener noreferrer" target='_blank'><Icon name="facebook" size='large' className='text-white'/></a>
            <a href="https://linkedin.com" rel="noopener noreferrer" target='_blank'><Icon name="linkedin" size='large' className='text-white'/></a>
            <a href="https://twitter.com" rel="noopener noreferrer" target='_blank'><Icon name="twitter" size='large' className='text-white'/></a>
            <a href="https://instagram.com" rel="noopener noreferrer" target='_blank'><Icon name="instagram" size='large' className='text-white'/></a>
            <a href="https://youtube.com" rel="noopener noreferrer" target='_blank'><Icon name="youtube" size='large' className='text-white'/></a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-white mb-3"><p>IMPORTANT</p></div>
          <div className='my-1'><Link to="/" className="text-[#aaa6c3] hover:text-[#aaa6c3] focus:text-[#aaa6c3]">Home</Link></div>
          <div className='my-1'><Link to="/About" className="text-[#aaa6c3] hover:text-[#aaa6c3] focus:text-[#aaa6c3]">About</Link></div>
        </div>

        <div className="flex flex-col">
          <div className="text-white mb-3"><p>CONTACT US</p></div>
          <div className='my-1 flex space-x-3'><Icon name='phone' className='text-[#aaa6c3]'/><p className='text-[#aaa6c3]'>+1-444-444-4444</p></div>
          <div className='my-1 flex space-x-3'><Icon name='mail' className='text-[#aaa6c3]'/><p className='text-[#aaa6c3]'>info@upload2sketch.com</p></div>
          <div className='my-1 flex space-x-3'><Icon name='whatsapp' className='text-[#aaa6c3]'/><p className='text-[#aaa6c3]'>+1-444-444-4444</p></div>
          <div className='my-1 flex space-x-3'><Icon name='instagram' className='text-[#aaa6c3]'/><p className='text-[#aaa6c3]'>abc_xyz</p></div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-4 bg-[#aaa6c3] h-0.5 w-[75%]"></div>
        <div>
          <p className="text-[#aaa6c3] py-2">Copyright &#169; 2024 Upload2Sketch</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
