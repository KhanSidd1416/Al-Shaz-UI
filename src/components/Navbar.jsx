import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/HomeIcon.svg";
import { ReactComponent as CategoryIcon } from "../assets/Category.svg";
import { ReactComponent as CartIcon } from "../assets/CartIcon.svg";

const Navbar = () => {
  return (
    <div className="fixed -bottom-3 w-full flex justify-around bg-gradient-light-gray-58 py-5 border-t rounded-t-2xl left-1/2 -translate-x-1/2 max-w-[700px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white drop-shadow-white"
            : "text-hinkal-gray-10 hover:text-hinkal-gray-100 hover:drop-shadow-white"
        }
      >
        <HomeIcon />
      </NavLink>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive
            ? "text-white drop-shadow-white"
            : "text-hinkal-gray-10 hover:text-hinkal-gray-100 hover:drop-shadow-white"
        }
      >
        <CategoryIcon />
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) =>
          isActive
            ? "text-white drop-shadow-white"
            : "text-hinkal-gray-10 hover:text-hinkal-gray-100 hover:drop-shadow-white"
        }
      >
        <CartIcon />
      </NavLink>
    </div>
  );
};

export default Navbar;

