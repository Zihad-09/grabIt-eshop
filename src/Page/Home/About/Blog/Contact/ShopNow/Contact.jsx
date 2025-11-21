import React from "react";
import ContactElement from "./HomeComponent/ContactElement";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (

<div className="container mx-auto px-4 my-10">

  <ContactElement />

 
  <div className="bg-white p-6 md:p-10 rounded-lg shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

  
    <div className="space-y-3 text-center md:text-left">
      <h3 className="border border-gray-300 h-10 w-10 mx-auto md:mx-0 flex justify-center items-center rounded-md">
        <GoMail className="text-lg" />
      </h3>
      <p className="font-semibold">Mail & Website</p>

      <p className="text-gray-700 flex items-center gap-2 justify-center md:justify-start">
        <MdEmail /> mail@companyprofile.com
      </p>
      <p className="text-gray-700 flex items-center gap-2 justify-center md:justify-start">
        <FaGlobe /> www.yourdomain.com
      </p>
    </div>

  
    <div className="space-y-3 text-center md:text-left">
      <h3 className="border border-gray-300 h-10 w-10 mx-auto md:mx-0 flex justify-center items-center rounded-md">
        <MdPhone className="text-lg" />
      </h3>
      <p className="font-semibold">Contact</p>

      <p className="text-gray-700 flex items-center gap-2 justify-center md:justify-start">
        <MdPhone /> +91-999-xxxxxxx
      </p>
      <p className="text-gray-700 flex items-center gap-2 justify-center md:justify-start">
        <MdPhone /> +91-888-xxxxxxx
      </p>
    </div>


    <div className="space-y-3 text-center md:text-left">
      <h3 className="border border-gray-300 h-10 w-10 mx-auto md:mx-0 flex justify-center items-center rounded-md">
        <IoLocationOutline className="text-lg" />
      </h3>
      <p className="font-semibold">Address</p>

      <p className="text-gray-700">
        Aurora Media Monarch (P) Ltd <br />
        Subhashnagar - MA, 403521 <br />
        Brazil
      </p>
    </div>

  </div>

  <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    
    <div className="w-full h-[350px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117536.92004169503!2d91.32573140866558!3d22.98597020362185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfeni%20sadar%20upazila%20health%20complex!5e0!3m2!1sen!2sbd!4v1762895948883!5m2!1sen!2sbd"
        className="rounded-md w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

   
    <div className="flex flex-col gap-4 w-full">
      <input className="w-full py-2 px-4 border border-gray-300 rounded-md" type="text" placeholder="Your Name..." />
      <input className="w-full py-2 px-4 border border-gray-300 rounded-md" type="email" placeholder="Your Email..." />
      <input className="w-full py-2 px-4 border border-gray-300 rounded-md" type="text" placeholder="Your Number..." />
      <textarea className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md" placeholder="Your Message..."></textarea>

      <button className="btn bcp text-white px-6 py-2 rounded-md">
        Submit
      </button>
    </div>

  </div>
</div>

  );
};

export default Contact;

