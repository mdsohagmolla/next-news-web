import Image from 'next/image';
import React from 'react';

const Header = () => {
    const today = new Date()
    return (
       <header className=" bg-white">
      <div className="container mx-auto grid grid-cols-3 items-center py-4">

        {/* Left - Empty space */}
        <div></div>

        {/* Center - Logo + Website Info */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/news24logo.webp"
            alt="Bangla News 24 logo"
            width={40}
            height={40}
            className="rounded-md"
          />

          <div>
            <h1 className="font-serif text-2xl font-bold text-red-700">
              Bangla News 24
            </h1>

            <p className="text-sm text-gray-500">
              {today.toLocaleDateString("bn-BD", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Right - Authentication Buttons */}
        <div className="flex justify-end items-center gap-2">
          <button className="px-3 py-2 text-md">
            সাইন ইন
          </button>

          <button className="rounded-md bg-red-600 px-4 py-2 text-md font-semibold text-white hover:bg-red-700">
            সাইন আপ
          </button>
        </div>

      </div>
    </header>
    );
};

export default Header;