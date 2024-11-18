import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'; 
import { AiOutlineSearch } from 'react-icons/ai'; 
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#fafafa] p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center">
        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 space-x-8 m-5 ml-10 p-5">
          <Link href="/collections" className="text-gray-600 hover:text-gray-900">Collections</Link>
          <Link href="/women" className="text-gray-600 hover:text-gray-900">Women</Link>
          <Link href="/men" className="text-gray-600 hover:text-gray-900">Men</Link>
          <Link href="/kids" className="text-gray-600 hover:text-gray-900">Kids</Link>
        </div>

        {/* Centered Logo */}
        <div className="flex-1 flex justify-center text-3xl font-bold text-gray-800">
          <Link href="/">s a r v a</Link>
        </div>

        {/* Search and Cart Icons */}
        <div className="flex items-center space-x-4 m-5 p-5 flex-1 justify-end">
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
