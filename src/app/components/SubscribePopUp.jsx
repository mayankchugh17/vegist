"use client";

import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

function SubscribePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const popupClosed = localStorage.getItem("subscribe-popup");

    if (!popupClosed) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("subscribe-popup", "true");
    }

    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
      <div className="bg-white max-w-3xl w-full rounded-lg relative p-10 text-center">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
        >
          <CloseIcon />
        </button>

        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-semibold text-[#CD7752]">
          Become a subscriber
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-xl text-center">
          Subscribe to get the notification of latest posts
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your email address"
          className="w-full border border-gray-300 rounded-md p-3 mt-8 outline-none text-md md:text-xl"
        />

        {/* Subscribe Button */}
        <button className="bg-[#CD7752] hover:bg-[#b96544] text-white px-4 md:px-8 my-2 py-2 md:py-4 mt-6 rounded-md text-xl">
          Subscribe
        </button>

        {/* Checkbox */}
        <div className="flex items-center justify-center gap-3 mt-6 text-gray-600">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => setDontShowAgain(e.target.checked)}
          />
          <span>Don't show this popup again</span>
        </div>
      </div>
    </div>
  );
}

export default SubscribePopup;
