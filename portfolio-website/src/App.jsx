import React from 'react';
import Service from './components/Service';
import Experience from './components/Experience';
import RecentWork from './components/RecentWorks';
import Footer from './components/Footer';

import profileImg from './assets/images/profile.png';
import logoImg from './assets/icons/logo.png'; 
import homeIcon from './assets/icons/home.png';
import userIcon from './assets/icons/user.png';
import workIcon from './assets/icons/bag.png';
import educationIcon from './assets/icons/education.png';
import layersIcon from './assets/icons/layers.png';
import layoutIcon from './assets/icons/layout.png';
import teamIcon from './assets/icons/team.png';
import docIcon from './assets/icons/document.png';
import chatIcon from './assets/icons/chat.png';

import webIcon from './assets/icons/web.png';
import twitterIcon from './assets/icons/twitter.png';
import instagramIcon from './assets/icons/instagram.png';
import facebookIcon from './assets/icons/facebook.png';
import youtubeIcon from './assets/icons/youtube.png';

export default function App() {
  const navItems = [
    { name: 'Home', icon: homeIcon },
    { name: 'About', icon: userIcon },
    { name: 'Work', icon: workIcon },
    { name: 'Education', icon: educationIcon },
    { name: 'Services', icon: layersIcon },
    { name: 'Layout', icon: layoutIcon },
    { name: 'Team', icon: teamIcon },
    { name: 'Blog', icon: docIcon },
    { name: 'Contact', icon: chatIcon },
  ];

  const socialLinks = [
    { name: 'Website', icon: webIcon, url: '#' },
    { name: 'Twitter', icon: twitterIcon, url: '#' },
    { name: 'Instagram', icon: instagramIcon, url: '#' },
    { name: 'Facebook', icon: facebookIcon, url: '#' },
    { name: 'YouTube', icon: youtubeIcon, url: '#' },
  ];

  return (
    <div className="bg-[#2d2e43] text-white font-sans min-h-screen overflow-y-auto">
      
      <div className="flex min-h-screen">
        
        <aside className="w-16 md:w-20 bg-[#252636] border-r border-slate-700/50 flex flex-col items-center py-6 justify-between shrink-0">
          <div className="w-8 h-8 mb-8 flex items-center justify-center">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <nav className="flex-1 flex flex-col gap-6 items-center justify-center">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`p-2 rounded-lg transition ${
                  index === 0 ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
              </button>
            ))}
          </nav>
        </aside>

        {/* HERO CONTENT AREA */}
        <section className="flex-1 flex flex-col items-center justify-center relative p-6">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-[#00e5ff] blur-xl opacity-50 transform scale-110"></div>
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full bg-[#00e5ff] overflow-hidden flex items-center justify-center p-1">
              <img
                src={profileImg}
                alt="WAHID Ahmed"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          <h1 className="text-xl md:text-2xl font-bold tracking-widest text-white uppercase mb-2">
            WAHID Ahmed
          </h1>
          <p className="text-slate-300 text-xs md:text-sm font-medium mb-6">
            I Am Web Designer and Video Editor
          </p>

          <div className="flex items-center gap-3 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                title={social.name}
                className="w-8 h-8 rounded bg-cyan-400 flex items-center justify-center hover:opacity-90 transition"
              >
                <img src={social.icon} alt={social.name} className="w-4 h-4 object-contain brightness-0 invert" />
              </a>
            ))}
          </div>

          <div className="absolute bottom-6 flex flex-col items-center gap-1.5 text-slate-400 text-[10px] tracking-wide">
            <div className="w-4 h-7 border-2 border-[#00e5ff] rounded-full flex justify-center pt-1">
              <div className="w-1 h-1 bg-[#00e5ff] rounded-full animate-bounce"></div>
            </div>
            <span>Scroll Down</span>
          </div>
        </section>
      </div>

     
      <Service/>
      <Experience/>
      <RecentWork/>
      
<Footer />
      
    </div>
  );
}