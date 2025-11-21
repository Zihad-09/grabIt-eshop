
import React from "react";
import logo from "../../assets/image/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  const categories = [
    "Dairy & Milk",
    "Snack & Spice",
    "Fast Food",
    "Juice & Drinks",
    "Bakery",
    "Seafood",
  ];
  const company = [
    "About us",
    "Delivery",
    "Legal Notice",
    "Terms & Conditions",
    "Secure Payment",
    "Contact us",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      
      <div className="container mx-auto px-6 lg:px-12 py-12 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        <div className="lg:col-span-2">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <img src={logo} alt="Logo" className="w-28 sm:w-32" />
          </div>
          <p className="text-sm mb-6">
            Grabit is the biggest market of grocery products.
            <br /> Get your daily needs from our store.
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-green-600 hover:text-white transition">
              Google Play
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-md text-sm hover:bg-green-600 hover:text-white transition">
              App Store
            </button>
          </div>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Category</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c, i) => (
              <li key={i} className="hover:text-green-500 cursor-pointer transition">{c}</li>
            ))}
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            {company.map((c, i) => (
              <li key={i} className="hover:text-green-500 cursor-pointer transition">{c}</li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="text-green-500 w-5 h-5 mt-0.5" />
              <span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</span>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlinePhone className="text-green-500 w-5 h-5" />
              <span>0123456789</span>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineMail className="text-green-500 w-5 h-5" />
              <span>example@email.com</span>
            </li>
          </ul>

          
          <div className="flex gap-4 mt-6 text-lg justify-center sm:justify-start">
            <FaFacebookF className="cursor-pointer hover:text-green-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-green-500 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-green-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-green-500 transition" />
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 lg:px-12 
                        flex flex-col sm:flex-row items-center justify-between gap-4 
                        text-sm text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-green-500 font-semibold">Grabit</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-2xl">
            <FaCcVisa className="hover:text-green-500 transition" />
            <FaCcMastercard className="hover:text-green-500 transition" />
            <FaCcPaypal className="hover:text-green-500 transition" />
            <FaCcAmex className="hover:text-green-500 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
