"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <Image
              src={logo.src}
              alt="logo"
              width={70}
              height={60}
              className="filter grayscale-0 border border-blue-950 rounded-full p-0"
              style={{ filter: "invert(1)" }}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-black">
          <Link href="/" className="hover:text-mainRed">
            Home
            {path == "/" && <hr className="border-0 h-1 bg-mainRed my-1" />}
          </Link>
          <Link href="/services" className="hover:text-mainRed">
            Services
            {path == "/services" && (
              <hr className="border-0 h-1 bg-mainRed my-1" />
            )}
          </Link>
          <Link href="/about" className="hover:text-mainRed">
            About Us
            {path == "/about" && (
              <hr className="border-0 h-1 bg-mainRed my-1" />
            )}
          </Link>
          <Link href="/contact" className="hover:text-mainRed">
            Contact
            {path == "/contact" && (
              <hr className="border-0 h-1 bg-mainRed my-1" />
            )}
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="text-white bg-mainRed hover:bg-hoverRed px-4 py-2 rounded"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-mainRed border border-mainRed hover:bg-hoverRed hover:text-white px-4 py-2 rounded"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
