import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Customer Service</h2>
            <ul>
              <li><a href="#" className="hover:underline">Help & Contact Us</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:underline">Online Stores</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              <li><a href="#" className="hover:underline">What We Do</a></li>
              <li><a href="#" className="hover:underline">Available Services</a></li>
              <li><a href="#" className="hover:underline">Latest Posts</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Social Media</h2>
            <ul>
            <li><a href="https://twitter.com/" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.instagram.com/" className="hover:underline">Instagram</a></li>
            <li><a href="https://www.tumblr.com/" className="hover:underline">Tumblr</a></li>
            <li><a href="https://www.pinterest.com/" className="hover:underline">Pinterest</a></li>
          </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Profile</h2>
            <ul>
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="#" className="hover:underline">Checkout</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Help & Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>© 2021 Qode Interactive, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
 
*/