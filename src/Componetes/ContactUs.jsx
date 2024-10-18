import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className='px-20'>
      <div className=''>
        <iframe className=' w-full h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19051520227!2d103.67943619313444!3d1.314337886948529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sin!4v1717668249834!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div><br /><br />

      <div className='grid grid-cols-3 xl:max-2xl:grid-cols-3 lg:max-xl:grid-cols-2 md:max-lg:grid-cols-1'>
        <div className='space-y-4 '>
          <div className='flex space-x-6'
          >
            <IoIosCheckmarkCircleOutline className='size-12 text-gray-500' />
            <h2 className='font-semibold text-lg'>PARIS STORE</h2>
          </div>
          <p className='text-gray-500'>86 rue de Raymond poincare paris<br /> Monday to Friday: 9am to 8am <br />depot@qodeinterative.com</p>
        </div>
        <div className='space-y-4'>
          <div className='flex space-x-4'>
            <IoIosCheckmarkCircleOutline className='size-12 text-gray-500' />
            <h2 className='font-semibold text-lg'>MADIRD STORE</h2>
          </div>
          <p className='text-gray-500'>Plaza de la Fuensanta 13, Mostoles, Madrid<br /> Monday to Friday: 9am to 8am <br />depot@qodeinterative.com</p>
        </div>
        <div className='space-y-4'>
          <div className='flex space-x-4'>

            <IoIosCheckmarkCircleOutline className='size-12 text-gray-500' />
            <h2 className='font-semibold text-lg'>BERLIN STORE</h2>
          </div>
          <p className='text-gray-500'>Friedrichstrase 18, Innendstadlt, Berlin<br /> Monday to Friday: 9am to 8am <br />depot@qodeinterative.com</p>
        </div>
      </div><br /><br />
      <hr /><br /><br />

      <div className=''>
        <h2 className='text-center font-medium text-md '>SUBSCRIBE TO NEWSLETTER</h2><br/>
        <p className='text-center font-light text-[#929292] text-3xl'>Your brand's power lies in domaince. It is better to have 50% <br/>of one Mmarket, instead of 10% of five markets.</p>
      </div>
      <div className='flex justify-center'>
        <div className='mt-16 flex w-[500px] '>
          <input type="email" placeholder='Email Address' className='focus:outline-none  flex-grow p-2 border border-gray-300 rounded-l-md' />
          <button className='p-4 bg-black text-white rounded-r-md hover:bg-gray-400'>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs