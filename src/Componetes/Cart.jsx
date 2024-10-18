import React from 'react'
import { removeToCart } from '../reduxcore/cartRedux/cartAction';
import { useSelector, useDispatch } from 'react-redux'
import { CiCircleRemove } from "react-icons/ci";
import { IncrimentToCart, DeincrimentToCart } from '../../src/reduxcore/cartRedux/cartAction';
import { emptyCart } from '../reduxcore/cartRedux/cartAction';

const Cart = () => {

  const Cartdata = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const amount = Cartdata.length && Cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev += next)
  console.log("Cartamount", amount);


  return (
    <div>

      <div className='bg-img2'>
        <div className='flex justify-center items-center h-[300px] text-5xl text-white font-semibold'>CART</div>
      </div>


      {
        Cartdata.length == 0 ? ( <div className='grid grid-rows-2  justify-center mt-10'>
          <div className='border border-gray-400 w-[1200px] py-4 flex justify-evenly'>
            <h1 className='text-xl font-semibold '>YOUR CART IS CURRENTLY EMPTY </h1>
          </div>
          <div className='mt-6 flex-wrap'>
            <p className='text-md text-[#929292] '>Why not return to our amazing shop and start filling it with products, Just click on the button below to instatly get to the shop page. Oh, and while you'rethere check out <br /> all of our mind-blowing discounts.</p>
          </div>
          <div className='flex justify-center '>
            <a href='/shop' className='text-white bg-black px-2 py-2'>Return to Shop</a>
          </div>
        </div>): (<div className='p-4'>

          <button className='bg-gray-500 px-3 py-1 rounded-lg ml-4 hover:bg-white hover:text-black text-white font-semibold ' onClick={() => dispatch(emptyCart())}>EmptyCart</button>
          <div className='flex'>
            <div className='w-9/12    '>
              <table className='table-fixed  border text-center border-gray-500 m-4'>
                <thead>
                  <tr>
                    <th className='p-2'>Remove</th>
                    <th>Product Image</th>
                    <th>Product Title</th>
                    <th>Product Quntity</th>
                    <th>Product Price</th>
                  </tr>
                </thead>
  
                <tbody className='border '>
                  {
                    Cartdata.map((item) => {
                      return (
                        <tr>
                          <td onClick={() => dispatch(removeToCart(item.id))} className='p-2'>
                            <CiCircleRemove className='size-10 font-bold mx-auto' />
                          </td>
                          <td>
                            <img src={item.image} alt="" className='size-40 p-2 mx-auto' />
                          </td>
                          <td>
                            {item.title}
                          </td>
  
                          <td className=' flex space-x-5 m-14'>
                            <button className='btn' onClick={() => dispatch(DeincrimentToCart(item.id))}>-</button>
                            <p>
                              {item.quantity}
                            </p>
                            <button className='btn' onClick={() => dispatch(IncrimentToCart(item.id))}>+</button>
                          </td>
  
                          <td>
                            ${item.price * item.quantity}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className='w-3/12'>
              <table className='table-fixed  border text-center border-gray-500 m-4'>
                <thead>
                  <tr>
                    <th className='p-2 h-20 border-2'>Total Price</th>
                  </tr>
                </thead>
  
                <tbody className='border '>
  
                  <tr className='h-28 border-2 '>
                    <td>
                      <p>${amount}</p>
                    </td>
                  </tr>
  
  
                </tbody>
              </table>
  
            </div>
  
          </div>
        </div>) 
      }
    </div>
  )
}

export default Cart


// import React from 'react'
// import { removeToCart, emptyCart, incrementToCart, decrementToCart} from '../reduxcore/cartRedux/cartAction'
// import { useSelector, useDispatch } from 'react-redux'
// import { HiOutlineXMark } from "react-icons/hi2";
// import { useNavigate } from 'react-router-dom';





// const Cart = () => {

//   const Cartdata = useSelector((state) => state.cart)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const amount = Cartdata.length && Cartdata.map((item) => item.price * item.quantity).reduce((prev, next) => prev += next)

//   console.log("Cartamount", amount);

//   return (
//     <div className=''>
//       <div className='cart-img'>
//         <div className='flex justify-centr items-center h-[300px] text-5xl text-white font-semibold'>CART</div>
//       </div>
//       <div className='"mt-16 mx-8 justify-between"'>
//         {
//           Cartdata.length == 0 ? (
//             <div>
//               <div className="mt-4 border border-gray-200  py-5 ">
//                 <h1 className=" m-0 text-center rounded-md text-black font-semibold text-2xl mx-auto">
//                   YOUR CART IS CURRENTLY EMPTY.
//                 </h1>
//               </div>
//               <div className="mt-5 text-gray-500 font-light tracking-wide">
//                 <p>Why not return to our amazing shop and start filling it with products. Just click on the button below to instantly get back to the shop page. Oh, and while you’re there, check out all of our mind-blowing discounts.</p>
//               </div>

//               <div className="text-center top-0 mt-5  ">
//                 <button
//                   className="bg-black m-0  py-5 px-10 font-semibold text-sm text-white mx-auto tracking-wider "
//                   onClick={() => navigate("/shop")}
//                 >
//                   RETURN TO SHOP
//                 </button>
//               </div>
//             </div>
//           ) : (

//             <div className='container mx-auto mt-10'>

//               <div>
//                 <div className='flex justify-between'>
//                   <button className='bg-blue-500 p-2 ms-0 rounded-lg mx-auto text-white' onClick={() => navigate('/')}>BackToShop</button>
//                   <button className='bg-blue-500 p-2 me-0 rounded-lg ms-2 mx-auto text-white' onClick={() => dispatch(emptyCart())}>EmptyCart</button>
//                 </div>
//               </div>
//               <div>
//                 <h2 className='text-2xl font-semibold mt-7 ms-6'>SHOPPING CART</h2>
//               </div>
//               <div className='flex mt-10 ms-10 '>
//                 <div className='w-[750px]'>
//                   <table className='table-fixed w-full'>
//                     <tbody>
//                       {
//                         Cartdata.map((item) => {
//                           return (
//                             <tr className='font-semibold h-32 border-y-2'>
//                               <td className='w-4'>
//                                 <button onClick={() => dispatch(removeToCart(item.id))}>
//                                   <HiOutlineXMark className='text-lg stroke-1' />
//                                 </button>
//                               </td>
//                               <td className='w-28 '>
//                                 <img className='size-[100px]  object-cover ms-1 my-1' src={item.image} alt="" />
//                               </td>
//                               <td className='w-38 font-sans'>
//                                 <p className='text-sm font-semibold font-sans tracking-wider'>{item.title}</p>
//                               </td>
//                               <td className='w-24'>
//                                 <p>${item.price}</p>
//                               </td>
//                               <td className='w-44'>
//                                 <div className='flex items-center border-[1px] border-gray-300 p-2'>
//                                   <p className='text-[11px] text-gray-300 ms-2 font-serif'>Quantity</p>
//                                   <button className='ms-12 text-xl' onClick={() => dispatch(incrementToCart(item.id))} >+</button>
//                                   <h1 className='text-xl ms-1 me-1'>{item.quantity}</h1>
//                                   <button className='text-xl' onClick={() => dispatch(decrementToCart(item.id))}>-</button>
//                                 </div>
//                               </td>
//                               <td className='w-24'>
//                                 <p className='ms-11'>${item.price * item.quantity}</p>
//                               </td>
//                             </tr>
//                           )
//                         })
//                       }
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className='ms-16 h-[500px] w-96 border bg-slate-50'>
//                   <div className='ms-10 mt-10'>
//                     <h2 className='text-2xl tracking-wide font-semibold'>CART TOTALS</h2>
//                   </div>
//                   <div className='flex ms-10 mt-5'>
//                     <h2 className='text-[16px] tracking-wider font-semibold'>SUBTOTAL</h2>
//                     <p className='ms-10 text-[16px] text-gray-500'>${amount}</p>
//                   </div>
//                   <div className='flex ms-10 mt-5'>
//                     <h2 className='text-[16px] tracking-wider font-semibold'>SHIPPING</h2>
//                     <p className='ms-10 text-[16px] text-gray-500 font-thin'><input className='me-1' type="radio" />Free shipping</p>
//                   </div>
//                   <div className=' ms-[159px]'>
//                     <p className=' text-[16px] text-gray-500 font-thin mt-2'><input className='me-1' type="radio" />Local pickup</p>
//                     <p className=' text-[16px] text-gray-500 font-thin mt-2'><input className='me-1' type="radio" />Flat Rate: $10</p>
//                     <p className=' text-[16px] text-gray-500 font-thin mt-2'>Shipping to <span className='text-gray-800 text-[16px]'>India.</span></p>
//                   </div>
//                   <div className=' ms-[159px] mt-7'>
//                     <h2 className='text-[16px]'>CHANGE ADDRESS</h2>
//                   </div>
//                   <hr className='mt-5 w-80 ms-7' />
//                   <div className='mt-3 ms-7 flex'>
//                     <h2 className='font-semibold text-xl'>TOTAL</h2>
//                     <p className='mx-auto mr-0 me-10 text-xl font-bold'>${amount}</p>
//                   </div>
//                   <div className='mt-5 w-80 ms-7 h-10 bg-black text-white justify-center flex items-center'>
//                     <p className='text-sm'>PROCEED TO CHECKOUT</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         }
//       </div>

//     </div>
//   )
// }

// export default Cart