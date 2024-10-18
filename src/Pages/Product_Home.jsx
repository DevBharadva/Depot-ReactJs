import { IoMdArrowDropdown } from "react-icons/io";
// import { CiHeart } from "react-icons/ci";
import Home_Product from '../../home.json'
import { addToCart } from "../reduxcore/cartRedux/cartAction";
import { useSelector, useDispatch } from 'react-redux'
import { FaHeart } from "react-icons/fa";
import { addToWishList } from '../reduxcore/Wishlistredux/wishlistAction'
  
const Product_Home = () => {
  
  return (
    <>
      <div className=" bg-white pt-20 px-16 ">
        <div className="flex justify-between">
          <div>
            <ul className="flex space-x-9 text-sm text-gray-400  font-medium ">
              <li className="text-black ">ALL</li>
              <li className=" hover:text-black">HOME DECOR</li>
              <li className=" hover:text-black">LIGHTING</li>
              <li className=" hover:text-black">DECORATION</li>
              <li className=" hover:text-black">VASES</li>
              <li className=" hover:text-black">BASICS</li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <p className=" text-lg font-sm">Filter</p>{" "}
            <IoMdArrowDropdown className="mt-1 text-xl" />
          </div>
        </div>
        <Card_Home />
      </div>
    </>
  );
};

export const Card_Home = () => {

  const dispatch = useDispatch()

  const shopData = useSelector(state => state.Product)
  console.log('shopData', shopData);

  return (
    <div>

      <div className="grid grid-cols-4  gap-16 pt-10 lg:max-xl:grid-cols-3 md:max-lg:grid-cols-2 sm:max-md:grid-cols-1 sm">

        {
          Home_Product.map((item) => {

            return (
              <div>
                <div className="box reletive group">
                  <div className="relative overflow-hidden ">


                    <img className="w-96 h-96" src={item.image} alt="" />
                    <div className="flex absolute bottom-0 w-full justify-center opacity-0 group-hover:opacity-100 translate-y-6 group-hover:-translate-y-0 group-hover:duration-300">
                      <h1 className="flex text-[12px] px-4 bg-black text-white justify-center py-1 font-semibold">
                        QUICK LOOK
                      </h1>
                      <button className="bg-gray-500 p-1 " onClick={() => dispatch(addToWishList(item))}>
                        <FaHeart className="text-white text-sm" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-center mt-4 font-sans">{item.title}</h5>
                    <p className="text-gray-400 text-lg text-center mt-1 group-hover:hidden ">${item.price}</p>
                  </div>
                  <div className="flex justify-center">
                    <button onClick={() => dispatch(addToCart(item))} className="hidden text-gray-400 text-lg  group-hover:block  " >Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }


      </div>

    </div>
  );
};

export default Product_Home;