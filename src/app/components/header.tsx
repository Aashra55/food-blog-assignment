'use client';
import { useState } from "react";
import logo from "../images/logo.jpg";
import Image from "next/image";
import Link from "next/link";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b mb-[5px] border-[#E4599C] bg-white font-[sans-serif] tracking-wide relative">
      <section className="flex items-center justify-between py-4 px-8">
        {/* Left-aligned Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" className="w-36" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block md:block absolute lg:static md:static top-[100%] right-0 bg-white lg:bg-transparent md:bg-transparent w-full lg:w-auto md:w-auto z-[1000]`}
        >
          <ul
            className={`flex lg:flex-row md:flex-row flex-col lg:space-x-6 md:space-x-6 lg:ml-[0px] md:ml-[0px] ml-[15px] lg:pb-[0px] md:pb-[0px] mb-[8px]
                 lg:space-y-0 md:space-y-0 space-y-6 text-gray-800 text-sm font-medium uppercase lg:items-center md:items-center`}
          >
            <li>
              <Link href={'/'} className="hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/recipe'} className="hover:text-pink-500">
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/Blogs" className="hover:text-pink-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
