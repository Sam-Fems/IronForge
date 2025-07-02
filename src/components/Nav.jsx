import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', to: 'hero' },
    { name: 'Programs', to: 'programs' },
    { name: 'WhyChooseUs', to: 'why' },
    { name: 'Contact', to: 'footer' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0B132B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl h1 tracking-wide cursor-pointer">
          Iron<span className="text-red-500">Forge</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 h2 text-sm uppercase tracking-wider">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-red-500"
                className="cursor-pointer hover:text-red-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-md text-sm
          font-medium uppercase cursor-pointer">
            Join Now
          </button>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#0B132B] font-body">
          <ul className="flex flex-col gap-4 text-sm uppercase">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-red-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button className="mt-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-md text-sm
            font-medium uppercase cursor-pointer">
              Join Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
