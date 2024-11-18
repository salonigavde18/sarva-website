import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-gray-600 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start space-y-4 mb-12">
          <Link href="/" className="font-bold text-4xl tracking-wider">s a r v a</Link>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Location Section */}
          <div className="space-y-6">
            <h3 className="font-light text-xl">Location</h3>
            <p className="text-gray-500 leading-relaxed">
              500 Terry Francine St.<br />
              San Francisco, CA 94158<br />
              123-456-7890<br />
              info@mysite.com
            </p>
          </div>

          {/* Menu Section */}
          <div className="space-y-6">
            <h3 className="font-light text-xl">Menu</h3>
            <ul className="space-y-4">
              <li><Link href="/collections" className="hover:text-black transition-colors">Collections</Link></li>
              <li><Link href="/women" className="hover:text-black transition-colors">Women</Link></li>
              <li><Link href="/men" className="hover:text-black transition-colors">Men</Link></li>
              <li><Link href="/kids" className="hover:text-black transition-colors">Kids</Link></li>
            </ul>
          </div>

          {/* Rest of the footer content remains unchanged */}
          <div className="space-y-6">
            <h3 className="font-light text-xl">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-600 hover:text-black transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-black transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-black transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-light text-xl">Join Our Newsletter</h3>
            <p className="text-gray-500">Stay updated with our latest news and offers!</p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 focus:border-black outline-none transition-colors"
            />
            <button className="w-full p-3 bg-black text-white hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2024 Sarva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
