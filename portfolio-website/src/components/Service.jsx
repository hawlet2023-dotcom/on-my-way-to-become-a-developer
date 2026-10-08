import React from 'react';
import profileImg from '../assets/images/profile.png';
import fireIcon from '../assets/icons/fire.png'; 
import buildingIcon from '../assets/icons/building.png';
import usersIcon from '../assets/icons/users.png';
import badgeIcon from '../assets/icons/ball.png';
import htmlIcon from '../assets/icons/html.png';
import wordpressIcon from '../assets/icons/word.png';
import videoIcon from '../assets/icons/video.png';
import figmaIcon from '../assets/icons/figma.png';

export default function Service() {
  const skills = [
    { name: 'HTML', level: '92%', color: '#00e5ff' },        // Bright Cyan
    { name: 'CSS', level: '95%', color: '#facc15' },         // Yellow
    { name: 'JavaScript', level: '87%', color: '#4ade80' },  // Green
    { name: 'Figma', level: '83%', color: '#06b6d4' },        // Cyan/Teal
    { name: 'Adobe Premiere Pro', level: '87%', color: '#2563eb' }, // Blue
  ];

  const stats = [
    { icon: fireIcon, count: '198', label: 'Projects completed' },
    { icon: buildingIcon, count: '102', label: 'Running project' },
    { icon: usersIcon, count: '90', label: 'Satisfied clients' },
    { icon: badgeIcon, count: '85', label: 'Nominees winner' },
  ];

  const services = [
    {
      title: 'PSD TO HTML',
      description: 'I will design a psd to html web template fully responsively',
      icon: htmlIcon,
    },
    {
      title: 'PSD TO WORDPRESS',
      description: 'I will design a psd to wordpress web template fully responsively',
      icon: wordpressIcon,
    },
    {
      title: 'PROMOTIONAL VIDEO',
      description: 'I will make a promotional video for your brand',
      icon: htmlIcon,
    },
    {
      title: 'FIGMA DESIGN',
      description: 'I will design Figma web template or mobile app fully responsively',
      icon: htmlIcon,
    },
    {
      title: 'FIGMA TO WORDPRESS',
      description: 'I will design a figma to wordpress web template fully responsively',
      icon: wordpressIcon,
    },
    {
      title: 'PROMOTIONAL VIDEO',
      description: 'I will make a promotional video for your brand',
      icon: htmlIcon,
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-800 min-h-screen py-12 px-6 md:px-16 font-sans">
      {/* ================= ABOUT ME SECTION ================= */}
      <div className="max-w-5xl mx-auto mb-16">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-4 h-4 bg-indigo-300 transform -rotate-12 rounded-sm"></div>
          <h2 className="text-2xl font-bold text-slate-800">About Me</h2>
        </div>

        {/* Main About Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-10">
          {/* Profile Image with Ring */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#2a2b3d] p-1 shadow-md flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="WAHID Ahmed"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
          </div>

          {/* Bio Text & Download Button */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-medium">
              I Am WAHID Ahmed. I Am Proposal Web Designer And Video Editor. I have rich
              experience in web site design and building and customization,
              also I am good at WordPress, and also make proposal video editor for your brand.
            </p>
            <a
              href="#download-cv"
              className="inline-block w-fit bg-[#1e1f2b] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-slate-800 transition tracking-wider uppercase"
            >
              Download CV
            </a>
          </div>

          {/* Skills Progress Bars */}
          <div className="md:col-span-4 flex flex-col gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-[11px] font-bold text-slate-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                {/* Track Background */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden relative">
                  {/* Filled Color Bar */}
                  <div
                    className="h-full rounded-full transition-all duration-500 block"
                    style={{
                      width: skill.level,
                      backgroundColor: skill.color,
                      minHeight: '100%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={stat.icon} alt={stat.label} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-800">{stat.count}</h3>
                <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-4 h-4 bg-indigo-300 transform -rotate-12 rounded-sm"></div>
          <h2 className="text-2xl font-bold text-slate-800">Services</h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2d2e43] text-white rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 mb-4 flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-sm font-bold tracking-wider mb-2 uppercase">
                {service.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}