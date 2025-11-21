import React from 'react';
import SectionHeading from '../../../../../../../Components/SharedComponent/SectionHeading';

const ContactElement = () => {
  return (
    <div className="my-10 px-4 sm:px-6 lg:px-12">
     
      <div className="flex justify-center text-center sm:text-left mb-6">
        <SectionHeading
          heading={"Contact"}
          colorHeading={"With Us"}
          discription={
            "ipsum dolor sit, amet consectetu dicta illo libero natus omnis velit"
          }
        />
      </div>

    
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <div className="bg-gray-100 p-6 rounded-md text-center md:text-left">
          <h4 className="font-semibold text-lg mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-600">
            You can reach us via email or phone. We are always happy to help!
          </p>
        </div>

        
        <div className="bg-gray-100 p-6 rounded-md">
          <h4 className="font-semibold text-lg mb-2">Send a Message</h4>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-md px-3 py-2 text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-md px-3 py-2 text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="border rounded-md px-3 py-2 text-sm"
            ></textarea>
            <button className="btn bcp text-white">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactElement;
