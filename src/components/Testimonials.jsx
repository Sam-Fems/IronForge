import React from 'react';
import {Element} from "react-scroll";

const testimonials = [
  {
    name: 'Jade Okafor',
    quote:
      'IronForge helped me lose 15kg in 3 months. The coaches pushed me beyond my limits and I’ve never felt stronger.',
    image:
      'https://randomuser.me/api/portraits/women/68.jpg',
    program: 'Strength Training',
  },
  {
    name: 'David Onu',
    quote:
      'Best gym in town! Great equipment, amazing energy, and flexible programs. I actually look forward to working out.',
    image:
      'https://randomuser.me/api/portraits/men/32.jpg',
    program: 'Cardio & Conditioning',
  },
  {
    name: 'Blessing Adeniyi',
    quote:
      'IronForge changed my life. The personal coaching made all the difference—I finally feel confident again.',
    image:
      'https://randomuser.me/api/portraits/women/44.jpg',
    program: 'Personal Coaching',
  },
];

const Testimonials = () => {
  return (
    <Element name='testimonials'>
      <section className="w-full bg-[#0B132B] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading uppercase tracking-wider">
            What <span className="text-red-500">Our Members</span> Say
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-body">
            Real people. Real stories. Real transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#121c36] p-6 rounded-xl shadow-md hover:shadow-red-500/20 transition duration-300"
            >
              <p className="text-gray-300 italic text-sm mb-6">“{item.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
                />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-xs">{item.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Testimonials;
