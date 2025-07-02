import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { GiStrongMan } from 'react-icons/gi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';
import {Element} from "react-scroll";

const reasons = [
  {
    icon: <MdAccessTime className="text-red-500 w-10 h-10" />,
    title: '24/7 Access',
    desc: 'Workout whenever you want. Our gym is always open for you.',
  },
  {
    icon: <GiStrongMan className="text-red-500 w-10 h-10" />,
    title: 'Elite Trainers',
    desc: 'Train with certified experts who push you to reach new limits.',
  },
  {
    icon: <FaMoneyBillWave className="text-red-500 w-10 h-10" />,
    title: 'Affordable Plans',
    desc: 'No hidden fees. Just value-packed memberships for all goals.',
  },
  {
    icon: <RiShieldCheckFill className="text-red-500 w-10 h-10" />,
    title: 'Safe & Secure',
    desc: 'Hygienic, sanitized, and safe workout zones for peace of mind.',
  },
];

const WhyChooseUs = () => {
  return (
    <Element name='why'>
      <section className="w-full bg-[#0B132B] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl h1 uppercase tracking-wider">
            Why <span className="text-red-500">Choose Us</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg h2">
            IronForge gives you more than just machines. We give you the mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-[#121c36] p-6 rounded-lg shadow-lg hover:shadow-red-500/20 transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default WhyChooseUs;
