import React from 'react';
import { GiMuscleUp } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';
import {Element} from "react-scroll";

const programs = [
  {
    icon: <GiMuscleUp className="text-red-500 w-10 h-10" />,
    title: 'Strength Training',
    description: 'Build muscle, gain power, and dominate every lift with expert coaching.',
  },
  {
    icon: <FaRunning className="text-red-500 w-10 h-10" />,
    title: 'Cardio Endurance',
    description: 'Push your limits and improve stamina with high-intensity cardio sessions.',
  },
  {
    icon: <MdFitnessCenter className="text-red-500 w-10 h-10" />,
    title: 'Personal Coaching',
    description: '1-on-1 training customized to your goals, experience, and body type.',
  },
  {
    icon: <BsClockHistory className="text-red-500 w-10 h-10" />,
    title: 'Flexible Schedules',
    description: 'Train anytime with 24/7 access and multiple program time slots.',
  },
];

const Programs = () => {
  return (
    <Element name='programs'>
      <section className="w-full bg-[#0B132B] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl h1 uppercase tracking-wider">
            Our <span className="text-red-500">Programs</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg h2">
            Choose your path. We have something for every fitness level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#121c36] p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{program.icon}</div>
              <h3 className="text-xl h2 font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-300 h2 text-sm">{program.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Programs;
