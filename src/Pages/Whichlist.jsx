import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiCircleRemove } from 'react-icons/ci';
// import { addtocart } from '../../src/reduxcore/cartRedux/cartAction';
import { emptyWishlist, removeToWishList } from '../../src/reduxcore/Wishlistredux/wishlistAction';
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlistData = useSelector((state) => state.wishlist);
  const Navigate = useNavigate()

  const handleAddToCart = (item) => {
    dispatch(addtocart(item)); // Dispatch action to add item to cart
    dispatch(removeToWishList(item.id)); // Dispatch action to remove item from wishlist
  };

  return (
    <div>
     
      <div className='flex justify-center '>
          <button  className='btn border border-black px-2 bg-gray-100 ' onClick={() => dispatch(emptyWishlist())}>E m p t y whishlist</button>
        </div>
      <div className='flex items-center justify-evenly'>
        <div className='w-9/12'>
          {wishlistData.length > 0 ? (
            <table className='table-fixed w-full'>
              <thead className='border'>
                <tr>
                  <th className='p-2'>ADD TO CART</th>
                  <th className='p-2'>Remove</th>
                  <th>Product Image</th>
                  <th>Product Title</th>
                  <th>Product Price</th>
                </tr>
              </thead>
              <tbody>
                {
                 wishlistData.map((item) => (
                  <tr key={item.id} className='text-center border-2 border-solid'>
                    <td>
                      <button onClick={() => handleAddToCart(item)}>
                        <BsCartCheck className='text-2xl mx-auto stroke-1' />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => dispatch(removeToWishList(item.id))}>
                        <CiCircleRemove className='text-2xl mx-auto stroke-1' />
                      </button>
                    </td>
                    <td>
                      <img className='size-28 mx-auto p-2' src={item.image} alt={item.title} />
                    </td>
                    <td>
                      <p>{item.title}</p>
                    </td>
                    <td>
                      <p>${item.price}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className=''>

            <div className=' bg-gray-300 h-[500px] w-full'>
              <div className='flex justify-center items-center h-full'>

              <h2 className='text-4xl font-semibold '>W I S H L I S T</h2>
              </div>
            </div>
            <div className='flex justify-center items-center '>

              <p className=''>Add some products to your wishlist to see them here</p>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;