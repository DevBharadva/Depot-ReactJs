import React from 'react'
import Navbar from './Componetes/Navbar'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Shop from './Pages/Shop'
import Footer from './Componetes/Footer'
import AboutUs from './Componetes/AboutUs'
import Faq from './Componetes/Faq'
import ContactUs from './Componetes/ContactUs'
import Register from './Componetes/Register'
import Cart from './Componetes/Cart'
// import MenuPage from './Componetes/MenuPage'
import Wishlist from './Pages/Whichlist'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element:<Navbar/>,
    children:[
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/Shop',
        element: <Shop />
      },
      {
        path: '/AboutUs',
        element: <AboutUs />
      },
      {
        path: '/ContactUs',
        element: <ContactUs />
      },
      {
        path: '/Faq',
        element: <Faq />
      },
      {
        path: '/Register',
        element: <Register />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/Wishlist',
        element: <Wishlist/>
      }
    ]
  }
  
])
// import './App.css';
const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router}>
      </RouterProvider>
      <Footer/>
    </>
    // <div>
    // {/* <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route  path='/' element={<Homepage />}></Route>
    //     <Route path='/shop' element={<Shop />}></Route>
    //     <Route path='/AboutUs' element={<AboutUs/>}></Route>
    //     <Route path='/Faq' element={<Faq/>}></Route>
    //     <Route path='/ContactUs' element={<ContactUs/>}></Route>
    //     <Route path='/Register' element={<Register/>}></Route>
    //     <Route path='/Cart' element={<Cart/>}></Route>
    //     <Route path='/Menupage' element={<MenuPage/>}></Route>
    //   </Routes>
    //   <Footer />
    // </BrowserRouter> */}
    // </div>
  )
}

export default App