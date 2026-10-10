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

export default function FooterSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-slate-800">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-80 mb-20">
        {iconsList.map((icon, index) => (
          <div key={index} className="w-12 h-12 flex items-center justify-center p-2">
            <img src={icon.src} alt={icon.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}