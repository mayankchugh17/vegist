"use client";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <footer className="mx-auto pt-15 w-full flex flex-col px-5 bg-[#3C3C3C] text-gray-400 py-4 text-center gap-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <Image
          src="/footer/logo6.webp"
          className="w-30 md:w-40 text-white h-auto object-cover cursor-pointer"
          alt="Logo"
          width={250}
          height={50}
        />
        <div className="flex justify-start items-center gap-4">
            <LocationOnIcon />
            <h1 className="text-start">Wooster parck chowk bazzar new york </h1>
        </div>
        <div className="flex justify-start items-center gap-4">
            <CallIcon />
            <div className="flex flex-col">
            <h2 className="text-start">+1 (123) 456-7890</h2>
            <h2 className="text-start">support@spacingtech.com</h2>


            </div>
        </div>

      </div>
      <div>
        <ul className="flex flex-col items-start justify-center gap-6 font-bold">
          <div className="flex justify-between gap-35">
            <li>Services </li>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex justify-between gap-21">
            <li>Privacy & terms </li>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex justify-between gap-28">
            <li>My account </li>
            <KeyboardArrowDownIcon />
          </div>
        </ul>
        <div>
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
