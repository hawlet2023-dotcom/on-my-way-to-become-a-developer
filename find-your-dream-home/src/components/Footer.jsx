import React, { useState } from "react";
import posta from "../assets/icons/posta.png";
import tick from "../assets/icons/tick.png";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import logo from "../assets/icons/logo.png";
function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white">
      <div className="px-6 md:px-12 lg:px-20 py-20 text-center bg-white">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2B211D] leading-tight">
          Do You Have Any Questions?
          <br />
          Get Help From Us
        </h2>

        {/* CHECK */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs md:text-sm font-semibold text-[#2B211D]">
          <div className="flex items-center gap-2">
            <img src={tick} alt="check" className="w-4 h-4 object-contain" />
            <span>Chat live with our support team</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={tick} alt="check" className="w-4 h-4 object-contain" />
            <span>Browse our FAQ</span>
          </div>
        </div>

        {/* EMAIL FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
        >
          <div className="relative w-full sm:w-auto flex-1">
            <span className="absolute inset-y-0 left-4 flex items-center">
              <img src={posta} alt="email icon" className="w-4 h-4 object-contain opacity-70" />
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full bg-[#E2CEBF]/60 text-[#2B211D] placeholder-[#2B211D]/60 text-xs md:text-sm font-medium py-3.5 pl-11 pr-4 rounded-xl focus:outline-none border border-transparent focus:border-[#2B211D]/30"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#2B211D] text-white text-xs md:text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-[#1f1815] transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>

      {/* --- BOTTOM NAVIGATION FOOTER --- */}
      <div className="bg-[#E2CEBF] px-6 md:px-12 lg:px-20 py-16 text-[#2B211D]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

<div className="md:col-span-1">
  <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
    <img src={logo} alt="Dwello Logo" className="w-20 h-10 object-contain" />
  </div>
  <p className="mt-4 text-xs font-semibold leading-relaxed text-[#2B211D]/80">
    Bringing you closer to <br/> your dream home, one <br/>click at a time.
  </p>
</div>

          {/* ABOUT */}
          <div>
            <h3 className="text-sm font-extrabold mb-4">About</h3>
            <ul className="space-y-3 text-xs font-semibold text-[#2B211D]/80">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Our Team</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>
          {/* SUPPORT */}
          <div>
            <h3 className="text-sm font-extrabold mb-4">Support</h3>
            <ul className="space-y-3 text-xs font-semibold text-[#2B211D]/80">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* FIND US */}
          <div>
            <h3 className="text-sm font-extrabold mb-4">Find Us</h3>
            <ul className="space-y-3 text-xs font-semibold text-[#2B211D]/80">
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Locations</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-extrabold mb-4">Our Social</h3>
            <ul className="space-y-3 text-xs font-semibold text-[#2B211D]/80">
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <img src={instagram} alt="Instagram" className="w-4 h-4 object-contain" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <img src={facebook} alt="Facebook" className="w-4 h-4 object-contain" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <img src={twitter} alt="Twitter" className="w-4 h-4 object-contain" />
                  <span>Twitter (x)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;