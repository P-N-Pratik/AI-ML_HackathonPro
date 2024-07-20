import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
               <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mt-8">
          <div className="text-center mb-4">
            <a href="#" className="text-2xl font-bold">EatWell</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-4">
            <a href="#">How it Works</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Our Testimonials</a>
            <a href="#">Support</a>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="text-center">
            © 2024, EatWell, all rights reserved!!!
          </div>
        </div>
    </div>

  );
}

export default Footer;
