import search from "../assets/icons/search.png";
import user from "../assets/icons/user2.png";
import logo from "../assets/icons/logo.png";

function Navbar() {
  return (
    <nav className="h-[90px] w-full bg-[#FDFBF9] px-[8%] flex items-center justify-between">

      {/* Logo */}
      <img
        src={logo}
        alt="Dwello"
        className="w-[105px] object-contain"
      />

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-[70px] text-[15px] font-semibold text-[#2B211D]">
        <a href="#" className="hover:opacity-60">Home</a>
        <a href="#" className="hover:opacity-60">Service</a>
        <a href="#" className="hover:opacity-60">Agents</a>
        <a href="#" className="hover:opacity-60">Contact</a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-20">

        <img
          src={search}
          alt="Search"
          className="w-[23px] h-[23px] object-contain"
        />

        <img
          src={user}
          alt="User"
          className="w-[23px] h-[23px] object-contain"
        />

        <button className="bg-[#2B211D] text-white px-7 py-3 rounded-lg text-sm font-semibold">
          Sign up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;