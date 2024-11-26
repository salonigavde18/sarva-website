"use client"
import React, { useEffect, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    // Navbar slide-down animation
    gsap.from(navRef.current, {
      y: -50,
      duration: 1,
      opacity: 0,
    });

    // Letter-by-letter animation for the logo
    const logoLetters = logoRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      logoLetters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1, // Delay between letters
        ease: "power2.out",
      }
    );

    // Icons fade-in animation
    gsap.from(iconsRef.current, {
      opacity: 0,
      x: 20,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  const renderLogoText = () => {
    return "s a r v a".split("").map((char, index) => (
      <span key={index} className="letter">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <nav className="bg-[#fafafa] p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center">
        {/* Navigation Links */}
        <div
          ref={navRef}
          className="hidden md:flex flex-1 space-x-8 m-5 ml-10 p-5"
        >
          <Link href="/collections" className="text-gray-600 hover:text-gray-900">
            Collections
          </Link>
          <Link href="/women" className="text-gray-600 hover:text-gray-900">
            Women
          </Link>
          <Link href="/men" className="text-gray-600 hover:text-gray-900">
            Men
          </Link>
          <Link href="/kids" className="text-gray-600 hover:text-gray-900">
            Kids
          </Link>
        </div>

        {/* Centered Logo */}
        <div
          ref={logoRef}
          className="flex-1 flex justify-center text-3xl font-bold text-gray-800"
        >
          <Link href="/">{renderLogoText()}</Link>
        </div>

        {/* Search and Cart Icons */}
        <div
          ref={iconsRef}
          className="flex items-center space-x-4 m-5 p-5 flex-1 justify-end"
        >
          <Link href="/search">
            <AiOutlineSearch className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
          </Link>
          <Link href="/cart">
            <FiShoppingCart className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
