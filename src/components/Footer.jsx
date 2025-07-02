import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import {Element} from "react-scroll";

const Footer = () => {
  return (
    <Element name='footer'>
      <footer className="bg-[#0B132B] text-white py-12 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 h2">

          {/* Logo & Slogan */}
          <div>
            <h2 className="text-2xl h1 tracking-wide mb-2">
              Iron<span className="text-red-500">Forge</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Strength. Discipline. Community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-red-500 font-semibold uppercase text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Programs</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-red-500 font-semibold uppercase text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-red-500" /> +234 901 234 5678
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-red-500" /> info@ironforge.com
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-red-500 font-semibold uppercase text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-red-500 cursor-pointer" />
              <FaInstagram className="hover:text-red-500 cursor-pointer" />
              <FaXTwitter className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-10 text-center h2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} IronForge. All rights reserved.
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
