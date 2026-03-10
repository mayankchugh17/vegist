"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { FaRegHeart } from "react-icons/fa6";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-auto bg-white shadow-md py-4 px-6 flex items-center justify-between ">
      <Image
        src="/logo.svg"
        className="w-20 md:w-40 h-auto object-cover cursor-pointer"
        alt="Logo"
        width={190}
        height={50}
      />
      <div className="md:hidden">
        <MenuOutlinedIcon
          className="cursor-pointer"
          sx={{ fontSize: 40 }}
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <ul className="absolute  top-16 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col items-center space-y-4 md:hidden">
          <li className="hover:text-orange-400 transition duration-400">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-orange-400 transition duration-400">
            <Link href="/about">Shop</Link>
          </li>
          <li className="hover:text-orange-400 transition duration-400">
            <Link href="/contact">Collection</Link>
          </li>
          <li className="hover:text-orange-400 transition duration-400">
            <Link href="/contact">Blogs</Link>
          </li>
          <li className="hover:text-orange-400 transition duration-400">
            <Link href="/contact">Pages</Link>
          </li>
          <li className="hover:text-orange-400 transition duration-400">
            <Link href="/contact">Buy vegist</Link>
            <span className="w-12 h-6 bg-[#CD7752] text-white rounded-md flex items-center justify-center text-sm font-bold absolute top-6 right-190">
              HOT
            </span>
          </li>
        </ul>
      )}
      <ul className="hidden md:block flex space-x-14 font-semibold text-2xl text-gray-700 ">
        <li className="hover:text-orange-400 transition duration-400">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-orange-400 transition duration-400">
          <Link href="/about">Shop</Link>
        </li>
        <li className="hover:text-orange-400 transition duration-400">
          <Link href="/contact">Collection</Link>
        </li>
        <li className="hover:text-orange-400 transition duration-400">
          <Link href="/contact">Blogs</Link>
        </li>
        <li className="hover:text-orange-400 transition duration-400">
          <Link href="/contact">Pages</Link>
        </li>
        <li className="hover:text-orange-400 transition duration-400">
          <Link href="/contact">Buy vegist</Link>
          <span className="w-12 h-6 bg-[#CD7752] text-white rounded-md flex items-center justify-center text-sm font-bold absolute top-6 right-190">
            HOT
          </span>
        </li>
      </ul>

      <div className="flex justify-center items-center space-x-7 text-gray-700">
        <SearchIcon
          className="cursor-pointer"
          sx={{ fontSize: 40, fontWeight: "bold" }}
        />
        <PermIdentityIcon className="cursor-pointer" sx={{ fontSize: 40 }} />
        <FavoriteBorderIcon className="cursor-pointer" sx={{ fontSize: 40 }} />
        <span className="w-6 h-6 bg-[#CD7752] text-white rounded-full flex items-center justify-center text-sm font-bold absolute top-9 right-21">
          0
        </span>
        <ShoppingBagOutlinedIcon
          className="cursor-pointer"
          sx={{ fontSize: 40 }}
        />
        <span className="w-6 h-6 bg-[#CD7752] text-white rounded-full flex items-center justify-center text-sm font-bold absolute top-9 right-12">
          0
        </span>
      </div>
    </nav>
  );
}
