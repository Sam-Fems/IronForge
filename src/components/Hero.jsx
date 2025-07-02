import React from 'react';
import { Element } from 'react-scroll'
import { FaDumbbell } from 'react-icons/fa';

const Hero = () => {
  return (
    <Element name='hero'>
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20
    bg-[#0B132B] text-white">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl h1 uppercase tracking-widest leading-tight">
            Transform Your <span className="text-red-500">Body</span><br />
            Ignite Your Strength
          </h1>

          <p className="text-gray-300 h2 text-lg">
            Join IronForge today and take the first step toward becoming the strongest version of yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md text-sm uppercase
          font-semibold tracking-wide cursor-pointer">
              Join Now
            </button>
            <button className="border border-white hover:bg-white hover:text-[#0B132B] transition
          px-6 py-3 rounded-md text-sm uppercase font-semibold tracking-wide cursor-pointer">
              Explore Programs
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-0">
          <FaDumbbell className="text-red-600 w-40 h-40 md:w-56 md:h-56 animate-pulse" />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
