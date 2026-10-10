import React from 'react';
import card7 from '../assets/images/card7.png';
import card8 from '../assets/images/card8.png';
import card9 from '../assets/images/card9.png';

import html5 from '../assets/icons/html5.png'; 
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/javascript.png';
import bootstrap from '../assets/icons/bootstrap.png';
import facebook2 from '../assets/icons/facebook2.png';
import youtube2 from '../assets/icons/youtube2.png';
import elementor from '../assets/icons/elementor.png';
import wordpress from '../assets/icons/wordpress.png';
import tailwind from '../assets/icons/tailwind.png';
import jQuiry from '../assets/icons/jQuery.png';

const iconsList = [
  { src: html5, alt: 'HTML5' }, { src: css, alt: 'CSS' },
  { src: javascript, alt: 'JavaScript' }, { src: bootstrap, alt: 'Bootstrap' },
  { src: facebook2, alt: 'Facebook' }, { src: youtube2, alt: 'YouTube' },
  { src: elementor, alt: 'Elementor' }, { src: wordpress, alt: 'WordPress' },
  { src: tailwind, alt: 'Tailwind' }, { src: jQuiry, alt: 'jQuery' },
  { src: javascript, alt: 'JavaScript' }, { src: css, alt: 'CSS' },
];

const posts = [
  { id: 1, image: card7, title: '5 Best App Development Tool for Your Project', date: '09 February, 2020', author: 'WAHID AHMED' },
  { id: 2, image: card8, title: '5 Best App Development Tool for Your Project', date: '09 February, 2020', author: 'WAHID AHMED' },
  { id: 3, image: card9, title: '5 Best App Development Tool for Your Project', date: '09 February, 2020', author: 'WAHID AHMED' },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-white text-slate-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Tech & Social Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-80 mb-20">
          {iconsList.map((icon, index) => (
            <div key={index} className="w-12 h-12 flex items-center justify-center p-2">
              <img src={icon.src} alt={icon.alt} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>

        {/* 2. Latest Posts Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-3 h-3 bg-cyan-400 rotate-45 inline-block"></span>
            <h2 className="text-2xl font-bold text-slate-900">Latest Posts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-slate-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-slate-100">
                <div className="bg-[#F8F9FD] rounded-xl p-4 mb-4 flex justify-center items-center h-44">
                  <img src={post.image} alt={post.title} className="max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-3">{post.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium tracking-wide">{post.date} &nbsp; {post.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Get In Touch Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-3 h-3 bg-cyan-400 rotate-45 inline-block"></span>
            <h2 className="text-2xl font-bold text-slate-900">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <h3 className="text-lg font-bold text-slate-800">Let's talk about everything!</h3>
              <p className="text-sm text-slate-500">
                Don't like forms? Send me an <span className="underline cursor-pointer hover:text-cyan-500">email</span>. 👋
              </p>
            </div>

            <form className="md:col-span-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                <input type="email" placeholder="Your Email" className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                </div>
              <input type="text" placeholder="Your subject" className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300" />
              <textarea rows="4" placeholder="Your message" className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 resize-none"></textarea>
            </form>
          </div>
        </div>

      </div>
    </footer>
  );
}