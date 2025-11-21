
import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { LuHeadset } from 'react-icons/lu';
import { MdOutlineLocalShipping } from 'react-icons/md';

const Support = () => {
  const featuresData = [
    {
      id: 1,
      title: "Free Shipping",
      icon: <MdOutlineLocalShipping className="text-4xl cp mx-auto" />,
      description: "Free shipping on all US orders or orders above $200.",
    },
    {
      id: 2,
      title: "24/7 Support",
      icon: <LuHeadset className="text-4xl cp mx-auto" />,
      description: "Contact us 24 hours a day, 7 days a week.",
    },
    {
      id: 3,
      title: "30 Days Return",
      icon: <BiSolidDonateHeart className="text-4xl cp mx-auto" />,
      description: "Simply return it within 30 days for an exchange.",
    },
    {
      id: 4,
      title: "Payment Secure",
      icon: <AiFillBank className="text-4xl cp mx-auto" />,
      description: "Contact us 24 hours a day, 7 days a week.",
    },
  ];

  return (
    <div className="container mx-auto my-10 px-4">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {featuresData.map((f) => (
          <div
            key={f.id}
            className="border border-gray-200 rounded-md px-6 py-8 hover:shadow-md transition"
          >
            <p>{f.icon}</p>
            <p className="text-gray-700 font-semibold mt-3">{f.title}</p>
            <p className="text-gray-500 text-sm mt-2">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
