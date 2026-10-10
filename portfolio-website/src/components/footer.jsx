import React from 'react';
import card7 from '../assets/images/card7.png';
import card8 from '../assets/images/card8.png';
import card9 from '../assets/images/card9.png';

import html5 from './assets/icons/html5.png'; 
import css from './assets/icons/css.png';
import javascript from './assets/icons/javascript.png';
import bootstrap from './assets/icons/bootstrap.png';
import facebook2 from './assets/icons/facebook2.png';
import youtube2 from './assets/icons/youtube2.png';
import elementor from './assets/icons/elementor.png';
import wordpress from './assets/icons/wordpress.png';
import tailwind from './assets/icons/tailwind.png';
import jQuiry from './assets/icons/jQuiry.png';

const iconsList = [
  { src: html5, alt: 'HTML5' },
  { src: css, alt: 'CSS' },
  { src: javascript, alt: 'JavaScript' },
  { src: bootstrap, alt: 'Bootstrap' },
  { src: facebook2, alt: 'Facebook' },
  { src: youtube2, alt: 'YouTube' },
  { src: elementor, alt: 'Elementor' },
  { src: wordpress, alt: 'WordPress' },
  { src: tailwind, alt: 'Tailwind' },
  { src: jQuiry, alt: 'jQuery' },
  { src: javascript, alt: 'JavaScript' },
  { src: css, alt: 'CSS' },
];

export default function Footer() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-slate-800">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-80 mb-20">
        {iconsList.map((icon, index) => (
          <div key={index} className="w-12 h-12 flex items-center justify-center p-2">
            <img src={icon.src} alt={icon.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-3 h-3 bg-cyan-400 rotate-45 inline-block"></span>
          <h2 className="text-2xl font-bold text-slate-900">Latest Posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
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
    </section>
  );
}