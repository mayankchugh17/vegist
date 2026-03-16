"use client";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

function Footer() {
  const [services, setServices] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [account, setAccount] = useState(false);

  return (
    <footer className="bg-[#3C3C3C] w-full text-white py-16 px-5 md:px-20">
      <div className="mx-auto">
        <div className="grid md:grid-cols-4 gap-4 md:gap-10 ">
          <div className="flex flex-col gap-8 text-sm md:text-xl text-[#7F7F7F]">
            <Image
              src="/footer/logo6.webp"
              alt="logo"
              width={260}
              height={60}
              className="w-40"
            />

            <div className="flex gap-3 text-md md:text-xl">
              <LocationOnIcon sx={{ color: "#CD7752" }} />
              <p>Wooster parck chowk bazzar new York</p>
            </div>

            <div className="flex gap-3 text-md md:text-xl">
              <CallIcon sx={{ color: "#CD7752" }} />
              <div>
                <p className="hover:text-[#CD7752] cursor-pointer">
                  +1 (123) 456-7890
                </p>
                <p className="hover:text-[#CD7752] cursor-pointer">
                  support@spacingtech.com
                </p>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className=" pt-4 md:pt-0">
            <div
              onClick={() => setServices(!services)}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <h1 className="text-lg md:text-2xl font-bold ">Services</h1>
              <span className="md:hidden">
                {services ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                
              </span>
            </div>

            <div
              className={`flex flex-col gap-2 md:gap-4 mt-4 text-sm md:text-[22px] text-[#7F7F7F]
              ${services ? "block" : "hidden"} md:flex`}
            >
              <p className="hover:text-[#CD7752] cursor-pointer">
                About vegist
              </p>
              <p className="hover:text-[#CD7752] cursor-pointer">Faq's</p>
              <p className="hover:text-[#CD7752] cursor-pointer">Contact us</p>
              <p className="hover:text-[#CD7752] cursor-pointer">News</p>
              <p className="hover:text-[#CD7752] cursor-pointer">
                Store location
              </p>
            </div>
          </div>

          {/* PRIVACY */}
          <div className=" pt-4 md:pt-0">
            <div
              onClick={() => setPrivacy(!privacy)}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <h1 className="text-lg md:text-2xl font-bold ">Privacy & Terms</h1>
              <span className="md:hidden">
                { privacy ? <KeyboardArrowUpIcon />  : <KeyboardArrowDownIcon />}
                
              </span>
            </div>

            <div
              className={`flex flex-col gap-2 md:gap-4 mt-4 text-sm md:text-[22px] text-[#7F7F7F]
              ${privacy ? "block" : "hidden"} md:flex`}
            >
              <p className="hover:text-[#CD7752] cursor-pointer">
                Payment policy
              </p>
              <p className="hover:text-[#CD7752] cursor-pointer">
                Private policy
              </p>
              <p className="hover:text-[#CD7752] cursor-pointer">
                Return policy
              </p>
              <p className="hover:text-[#CD7752] cursor-pointer">
                Shipping policy
              </p>
              <p className="hover:text-[#CD7752] cursor-pointer">
                Terms & conditions
              </p>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className=" pt-4 md:pt-0">
            <div
              onClick={() => setAccount(!account)}
              className="flex justify-between items-center cursor-pointer md:cursor-default"
            >
              <h1 className="text-lg md:text-2xl font-bold ">My Account</h1>
              <span className="md:hidden">
                { account ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }
              </span>
            </div>

            <div
              className={`flex flex-col gap-2 md:gap-4 mt-4 text-[#7F7F7F] text-sm md:text-[22px]
              ${account ? "block" : "hidden"} md:flex`}
            >
              <p className="hover:text-[#CD7752] cursor-pointer">My account</p>
              <p className="hover:text-[#CD7752] cursor-pointer">My cart</p>
              <p className="hover:text-[#CD7752] cursor-pointer">
                Order history
              </p>
              <p className="hover:text-[#CD7752] cursor-pointer">My wishlist</p>
              <p className="hover:text-[#CD7752] cursor-pointer">My address</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
