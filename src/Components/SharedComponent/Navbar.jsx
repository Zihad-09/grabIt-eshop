import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-y py-2 border-gray-200">
      <div className="flex justify-between items-center container mx-auto">
      
        <div className="flex items-center cursor-pointer gap-2 bcp text-white py-2 px-6 rounded-md">
          <BiCategory />
          <p className="hidden sm:block">All Category</p>
        </div>

       
        <div className="hidden lg:block space-x-12">
          <NavLink
            className={({ isActive }) =>
              isActive ? `cp font-bold text-lg` : ``
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `cp font-bold text-lg` : ``
            }
            to="/shop"
          >
            Shop Now
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `cp font-bold text-lg` : ``
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `cp font-bold text-lg` : ``
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `cp font-bold text-lg` : ``
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </div>

       
        <div className="hidden sm:block">
          <Link to="/shop">
            <div className="flex items-center gap-2 bcp text-white py-2 px-6 rounded-md">
              <CiShoppingCart />
              <p>Shop Now</p>
            </div>
          </Link>
        </div>

       
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
        </div>
      </div>

 
      {open && (
        <div className="flex flex-col space-y-3 px-6 py-4 lg:hidden border-t">
          <NavLink onClick={() => setOpen(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/shop">
            Shop Now
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact">
            Contact
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/blog">
            Blog
          </NavLink>

          <Link to="/shop" onClick={() => setOpen(false)}>
            <div className="flex items-center gap-2 bcp text-white py-2 px-6 rounded-md">
              <CiShoppingCart />
              <p>Shop Now</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Navbar;
