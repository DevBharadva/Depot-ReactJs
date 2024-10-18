import React, { useState } from 'react'
import About_slider from './About_slider'
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const AboutUs = () => {

  const [text, settext] = useState("Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh.")

  function text1() {
    settext("Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.  Aliquam eu lorem nibh. Mauris ex dolor, rutrum in odio vel, suscipit ultrices nunc. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh.")
  }


  function text2() {
    settext("Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Proin nec blandit ligula. Donec volutpat leo turpis, vel accumsan nunc convallis id. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum.")
  }

  function text3() {
    settext("Donec volutpat leo turpis, vel accumsan nunc convallis id. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Cras ipsum dolor, eleifend et nisl vel, tempor molestie nibh. In hac habitasse platea dictumst. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus. Interdum et malesuada fames ac ante ipsum primis. Proin nec.")
  }

  return (
    <div className=''>
      <div className='bg-image '>
        <div className='flex justify-center items-center p-[170px]  text-white font-semibold text-6xl'>About US</div>
      </div>
      <div className='grid grid-cols-2  '>

        <div className='md:shrink-0'>
        <img className=' md:h-[300px] m-10 xl:h-[450px]' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-img-1.jpg" alt="" />
        </div>
        <div className='ml-24'>
          <div className='space-x-16 mt-11  '>
            <button onClick={text1} className='border  border-black  py-5 px-6  focus:bg-black  focus:text-white text-black  '>About Us</button>

            <button onClick={text2} className='border  border-black py-5 px-6  focus:bg-black  focus:text-white'>Services</button>

            <button onClick={text3} className='border  border-black py-5 px-6  focus:bg-black  focus:text-white '>History</button>

          </div>
          <p className='mt-4 text-gray-400'>{text}</p>
        <div className='text-[#929292] text-lg group hover:text-black mt-10'>
          <Link className='flex'>
            Learn More <FaArrowRightLong className='mt-2 ml-2 group-hover:translate-x-2'/>
            </Link>
        </div>
      </div>
        </div>
      <div className='bg-gray-100 mt-10 w-full h-[350px]'>
          <About_slider />
      </div>
    </div>
  )
}

export default AboutUs