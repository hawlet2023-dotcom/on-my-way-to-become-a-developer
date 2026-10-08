import React from 'react';

import capIcon from '../assets/icons/education.png';

export default function Experience() {
  const experiencesColumn1 = [
    {
      date: '2022 - Present',
      title: 'Academic Degree',
      description:
        'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    },
    {
      date: '2022 - Present',
      title: 'Academic Degree',
      description:
        'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    },
    {
      date: '2022 - Present',
      title: 'Academic Degree',
      description:
        'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    },
  ];

  const experiencesColumn2 = [
    {
      date: '2022 - Present',
      title: 'Academic Degree',
      description:
        'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    },
    {
      date: '2022 - Present',
      title: 'Academic Degree',
      description:
        'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    },
    {
      date: '2022 - Present',
      title: 'Academic Degree',
      description:
        'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-800 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-4 h-4 bg-indigo-300 transform -rotate-12 rounded-sm"></div>
          <h2 className="text-2xl font-bold text-slate-800">Experience</h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Dark Card Container */}
          <div className="bg-[#2d2e43] text-white rounded-2xl p-8 shadow-xl flex flex-col gap-8">
            {experiencesColumn1.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Local Custom Icon */}
                <div className="mt-1 w-5 h-5 flex-shrink-0">
                  <img src={capIcon} alt="Icon" className="w-full h-full object-contain brightness-0 invert" />
                </div>

                {/* Timeline Content */}
                <div className="border-l border-slate-600 pl-4 space-y-1">
                  <span className="text-slate-400 text-xs font-medium block">
                    {item.date}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Container */}
          <div className="bg-[#2d2e43] text-white rounded-2xl p-8 shadow-xl flex flex-col gap-8">
            {experiencesColumn2.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Local Custom Icon */}
                <div className="mt-1 w-5 h-5 flex-shrink-0">
                  <img src={capIcon} alt="Icon" className="w-full h-full object-contain brightness-0 invert" />
                </div>

                {/* Timeline Content */}
                <div className="border-l border-slate-600 pl-4 space-y-1">
                  <span className="text-slate-400 text-xs font-medium block">
                    {item.date}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                   {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 