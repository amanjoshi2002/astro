"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo"; // Import the Logo component
import Login from "./Login"; // Import the Login component

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <>
      <nav className="flex items-center justify-between p-2 bg-transparent">
        <Logo />
        <div className="flex space-x-8 text-white text-lg ml-auto">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Language</a>
        </div>
        <button
          className="flex justify-center items-center gap-2 px-2 py-2 w-[120px] h-[60px] rounded-[20px] border-[3px] border-white bg-[radial-gradient(50%_50%_at_50%_50%,_#B20101_0%,_#C42700_100%)] ml-4 z-[10]"
          onClick={handleLoginClick}
        >
          LOGIN
        </button>
      </nav>
      {showLogin && <Login />} {/* Show the Login component when showLogin is true */}
    </>
  );
};

export default Navbar; 