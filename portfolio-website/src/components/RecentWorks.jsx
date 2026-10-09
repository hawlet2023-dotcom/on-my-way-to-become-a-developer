import React from 'react';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import card6 from '../assets/images/card6.png';
import userAvatar from '../assets/images/avatar.png';

export default function RecentWorks() {
  const categories = ['Everything', 'Creative', 'Art', 'Design', 'Branding'];

  return (
    <div className="min-h-screen bg-[#F8F9FD] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* SECTION 1: RECENT WORKS */}
        <section>
          {/* Header Title with Background Diamond Accent */}
          <div className="relative flex items-center mb-6">
            <div className="absolute -left-2 w-6 h-6 bg-indigo-200 opacity-60 rotate-45 rounded-sm" />
            <h2 className="relative z-10 text-xl font-extrabold text-slate-900 tracking-tight">
              Recent works
            </h2>
          </div>

          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm font-semibold">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`transition-colors duration-150 ${
                  index === 0
                    ? 'text-emerald-500 font-bold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl h-52 p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src={card1} alt="Recent work 1" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Card 2 - Highlight Card */}
            <div className="bg-[#6EE7E7] rounded-2xl h-52 p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block bg-[#1CC800] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  Creative
                </span>
                <h3 className="text-lg font-extrabold text-black leading-snug">
                  Guest App Walkthrough Screens
                </h3>
              </div>
              <div className="w-3 h-3 bg-[#CCFF00] rounded-full" />
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl h-52 p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src={card3} alt="Recent work 3" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl h-52 p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src={card4} alt="Recent work 4" className="max-h-full max-w-full object-contain" />
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl h-52 p-6 flex items-center justify-center relative shadow-sm hover:shadow-md transition-shadow">
              <img src={card5} alt="Recent work 5" className="max-h-full max-w-full object-contain" />
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#CCFF00] rounded-full" />
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl h-52 p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <img src={card6} alt="Recent work 6" className="max-h-full max-w-full object-contain" />
            </div>

          </div>
        </section>

        {/* SECTION 2: CLIENTS & REVIEWS */}
        <section>
          {/* Header Title with Background Diamond Accent */}
          <div className="relative flex items-center mb-8">
            <div className="absolute -left-2 w-6 h-6 bg-indigo-200 opacity-60 rotate-45 rounded-sm" />
            <h2 className="relative z-10 text-xl font-extrabold text-slate-900 tracking-tight">
              Clients & Reviews
            </h2>
          </div>

          {/* Testimonial Content Box */}
          <div className="flex flex-col items-center text-center">
            
            {/* User Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden mb-3 shadow-sm">
              <img src={userAvatar} alt="Sarowar Hossen" className="w-full h-full object-cover" />
            </div>

            {/* Author Info */}
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
              SAROWAR HOSSEN
            </h3>
            <p className="text-[11px] text-slate-500 font-medium mb-6">
              Product designer at Dribbble
            </p>

            {/* Dark Speech Bubble */}
            <div className="bg-[#3B3C54] text-white text-xs leading-relaxed px-6 py-4 rounded-xl max-w-md shadow-lg mb-6">
              I enjoy working with the theme and learn so much. You guys make <br/> the process fun and interesting. Good luck! 👍
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-1 bg-emerald-200 rounded-full" />
              <span className="w-4 h-1 bg-emerald-500 rounded-full" />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}