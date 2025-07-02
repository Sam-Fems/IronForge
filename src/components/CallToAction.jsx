import React from 'react';
import { Element } from 'react-scroll';

const CallToAction = () => {
  return (
    <Element name='cta'>
      <section className="w-full bg-gradient-to-r from-red-700 to-red-500 text-white py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl hq uppercase tracking-wide">
            Ready To <span className="text-black">Join IronForge?</span>
          </h2>
          <p className="text-lg h2 text-white/90">
            Take the first step toward becoming stronger, healthier, and more confident. Your journey begins now.
          </p>
          <div>
            <button className="bg-black hover:bg-gray-900 transition px-8 py-4 rounded-md text-sm
          uppercase font-semibold tracking-widest cursor-pointer">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default CallToAction;
