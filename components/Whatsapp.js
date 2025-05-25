"use client";

import React, { useState } from "react";

const WhatsAppButton = ({
  phoneNumber = "8801619599140", // Replace with your WhatsApp number (with country code, no + or spaces)
  message = "Hello! I'm interested in your services.",
  position = "bottom-6 right-6",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={`fixed ${position} z-50`}>
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          bg-green-500 hover:bg-green-600 
          text-white cursor-pointer
          rounded-full 
          p-4 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 ease-in-out
          transform hover:scale-110
          flex items-center justify-center
          ${isHovered ? "animate-pulse" : ""}
        `}
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.556 3.442C18.238 1.122 15.129 0 12.05 0 5.463 0 .104 5.359.101 11.945c0 2.104.547 4.157 1.588 5.975L0 24l6.304-1.654a11.936 11.936 0 005.738 1.463h.005c6.585 0 11.945-5.359 11.949-11.944A11.94 11.94 0 0020.556 3.442" />
        </svg>
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-90">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 "></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
