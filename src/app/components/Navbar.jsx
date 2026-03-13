"use client";
import Image from "next/image";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white gap-8">
      <div className="flex items-center justify-center gap-8 md:ml-10">
        <Image src="/logo.svg" alt="Vegist Logo" width={180} height={40} />

       
        {/* Hamburger */}
        <div className="md:hidden">
          <MenuIcon
            className="text-gray-600 cursor-pointer"
            sx={{ fontSize: 38 }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#F4F4F4] z-50 md:hidden">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-700"
              >
                X
              </button>
            </div>

            {/* Menu */}
            <ul className="text-xl text-gray-700 px-8">
              <li className="flex justify-between items-center py-4 border-b">
                <span>Home</span>
                <KeyboardArrowDownIcon />
              </li>

              <li className="flex justify-between items-center py-4 border-b">
                <span>Shop</span>
                <KeyboardArrowDownIcon />
              </li>

              <li className="flex justify-between items-center py-4 border-b">
                <span>Collection</span>
              </li>

              <li className="py-4 border-b">Blogs</li>

              <li className="flex justify-between items-center py-4 border-b">
                <span>Pages</span>
                <KeyboardArrowDownIcon />
              </li>

              <li className="py-4 text-[#CD7752]">Buy vegist</li>
            </ul>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 w-full bg-black text-white p-4 flex items-center gap-3">
              <Image src="/logo.svg" alt="logo" width={40} height={40} />
              <span>Vegist 7</span>
              <span className="bg-blue-600 text-xs px-2 py-1 rounded">
                Draft
              </span>
            </div>
          </div>
        )}

        {/* For medium or above */}
        <ul className="hidden md:flex space-x-12 text-2xl">
          <div className="flex justify-between space-x-12">
            <li>
              <span>
                <a href="#">Home</a>
              </span>{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
          </div>
          <div className="flex justify-between space-x-12">
            <li>
              <span>
                <a href="#">Shop</a>
              </span>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
          </div>
          <div className="flex justify-between space-x-12">
            <li>
              <span>
                <a href="#">Collection</a>
              </span>{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
          </div>
          <li>
            <span>
              <a href="#">Blogs</a>
            </span>
          </li>
          <div className="flex justify-between space-x-12">
            <li>
              <span>
                <a href="#">Pages</a>
              </span>{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </li>
          </div>
          <li>
            <span>
              <a href="#">Buy vegist</a>
            </span>
          </li>
        </ul>
      </div>

      <div className="icons flex items-center space-x-4 md:space-x-8">
        <SearchIcon
          className="text-gray-600 cursor-pointer"
          sx={{ fontSize: 38 }} 
        />
        <PersonOutlineIcon
          className="text-gray-600 cursor-pointer"
          sx={{ fontSize: 38 }} 
        />
        <FavoriteBorderIcon
          className="text-gray-600 cursor-pointer"
          sx={{ fontSize: 38 }} 
        />
        <WorkOutlineIcon
          className="text-gray-600 cursor-pointer"
          sx={{ fontSize: 38 }} 
        />
      </div>
    </nav>
  );
}

export default Navbar;
