import React from 'react'
import Homepage from './Homepage'
import { FaStar } from "react-icons/fa";
// import img from '../assets/Images/asset 10.png'
// import { IoIosHeart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { addToWishList } from '../reduxcore/Wishlistredux/wishlistAction'

import shop from '../../shop.json'

const Shop = () => {
  return (

    <div>
      <div className='py-3 mt-10 bg-gray-100'>
        <div className=''>
          <div className=' flex  py-4 text-gray-600 ml-20  '>
            <a href="/">
              <span>Home</span>
            </a>
            <a href="">
              <span> / with Sidebar</span>
            </a>
          </div>
        </div>
      </div>
      <div className='flex'>

        <div className='md:p-12  text-center text-md text-gray-500 '>
          <div className='mt-4 space-y-1'>
            <h2 className='hover:underline text-md text-black font-sans'>COLOR</h2>
            <h2 className='hover:text-black'>Beige (15)</h2>
            <h2 className='hover:text-black'>Black (14)</h2>
            <h2 className='hover:text-black'>Brown (5)</h2>
            <h2 className='hover:text-black'>Gold (7)</h2>
            <h2 className='hover:text-black'>Gery (8)</h2>
            <h2 className='hover:text-black'>Orange (3)</h2>
            <h2 className='hover:text-black'>Rose (5)</h2>
            <h2 className='hover:text-black'>White (17)</h2>
          </div >
          <div className='p-12'>
              <h2 className='hover:underline text-md text-sans text-black'>MATERIAL</h2>
            <div className=' space-y-1'>
              <h2 className='hover:text-black'>Chrome (14)</h2>
              <h2 className='hover:text-black'>Concrete (11)</h2>
              <h2 className='hover:text-black'>Glass (1)</h2>
              <h2 className='hover:text-black'>Metal (9)</h2>
              <h2 className='hover:text-black'>Steel (2)</h2>
              <h2 className='hover:text-black'>Wood (30)</h2>
            </div>
          </div>

        </div>
        <div className='p-12 ml-48 text-gray-500 text-lg '>
          <div>
            <div className='flex  justify-between '>

              <h2 className='mt-4'>Showing 1-12 of 57 results</h2>
              <div className='border border-gray-400 py-1 px-2 '>
                <select name="" id="">
                  <option value="">DeFult sorting</option>
                  <option value="">sort by popularity</option>
                  <option value="">sort by average rating</option>
                  <option value="">sort by latest</option>
                  <option value="">sort by price: low to high</option>
                  <option value="">sort by price: high to low</option>
                </select>
              </div>
            </div>

            <div className='grid grid-cols-4 gap-4 lg:max-xl:grid-cols-3 md:max-lg:grid-cols-2 sm:max-md:grid-cols-1'>
              {
                shop.map((item) => {
                  return (

                    <div className='group'>
                      <div className='relative overflow-hidden group'>

                        <img className=' mt-10' src={item.image} alt="" />

                        <div className="flex absolute bottom-0 w-full justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:-translate-y-0 group-hover:duration-300">
                          <h1 className="flex text-[12px] px-4 bg-black text-white justify-center py-1 font-semibold">
                            QUICK LOOK
                          </h1>
                          <button className="bg-gray-500 p-1 " onClick={() => dispatch(addToWishList(item))}>
                            <FaHeart className="text-white text-sm" />
                          </button>
                        </div>
                      </div>
                      <div className=' text-black text-center font-semibold py-1 px-5 mt-4 '>
                        <h2>{item.title}</h2>
                      </div>
                      <div className='flex justify-center mt-2 space-x-1'>

                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                      </div>
                      <div>
                        <h2 className='text-center mt-2 group-hover:hidden'>${item.price}</h2>
                      </div>
                      <div className="flex justify-center">

                        <button onClick={() => dispatch(addToCart(item))} className="hidden text-black font-semibold text-lg  group-hover:block  " >Add to Cart</button>
                      </div>
                    </div>

                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop