"use client";
import Image from "next/image";
import Link from "next/link";
// import { FaRegHeart } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between ">
      <Image src="/logo.svg" className="h-auto object-cover" alt="Logo" width={190} height={50} />
      <ul className="flex space-x-14 font-semibold text-2xl text-gray-700 ">
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
        </li>
      </ul>
      
    </nav>
  );
}
