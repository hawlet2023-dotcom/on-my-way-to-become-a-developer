function SearchBox() {
  return (
    <div className="
      absolute
      left-1/2
      -translate-x-1/2
      bottom-[-55px]
      w-[92%]
      max-w-6xl
      bg-[#E2CEBF]
      rounded-2xl
      p-10
      flex
      flex-col
      md:flex-row
      items-center
      gap-4
      shadow-md
      z-15
    ">

      {/* LOCATION BUTTON */}
      <button className="
        flex-1
        w-full
        bg-[#FAF6F0]
        rounded-xl
        px-10
        py-4
        flex
        items-center
        justify-between
        text-left
        shadow-sm
      ">
        <span className="text-sm font-medium text-[#52443C]">Location</span>
        <svg
          className="w-5 h-5 text-[#52443C] shrink-0"
          style={{ width: '20px', height: '20px' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      </button>

      {/* TYPE BUTTON */}
      <button className="
        flex-1
        w-full
        bg-[#FAF6F0]
        rounded-xl
        px-10
        py-4
        flex
        items-center
        justify-between
        text-left
        shadow-sm
      ">
        <span className="text-sm font-medium text-[#52443C]">Type</span>
        <svg
          className="w-5 h-5 text-[#52443C] shrink-0"
          style={{ width: '20px', height: '20px' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9 21v-6h6v6" />
        </svg>
      </button>

      {/* PRICE RANGE BUTTON */}
      <button className="
        flex-1
        w-full
        bg-[#FAF6F0]
        rounded-xl
        px-10
        py-4
        flex
        items-center
        justify-between
        text-left
        shadow-sm
      ">
        <span className="text-sm font-medium text-[#52443C]">Price Range</span>
        <svg
          className="w-5 h-5 text-[#52443C] shrink-0"
          style={{ width: '20px', height: '20px' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10" />
          <path d="M15 9.5c0-1-1.3-1.5-3-1.5s-3 .5-3 1.5 1.3 1.5 3 1.5 3 .5 3 1.5-1.3 1.5-3 1.5-3-.5-3-1.5" />
        </svg>
      </button>

      {/* SIGN UP BUTTON */}
      <button className="
        w-full
        md:w-auto
        bg-[#2B211D]
        text-white
        px-10
        py-4
        rounded-xl
        text-sm
        font-semibold
        whitespace-nowrap
        hover:bg-[#1f1815]
        transition
      ">
        Sign up
      </button>

    </div>
  );
}

export default SearchBox;