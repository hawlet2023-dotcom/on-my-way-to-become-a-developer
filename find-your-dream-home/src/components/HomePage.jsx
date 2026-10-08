import home1 from "../assets/images/home1.png";
import home2 from "../assets/images/home2.png";
import SearchBox from "./SearchBox";

function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[#FFF8F0] px-6 md:px-12 lg:px-20 pt-10 pb-36">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 z-10 pt-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-[#2B211D] tracking-tight">
              Find Your
              <br />
              Dream Home
            </h1>
            <p className="mt-6 max-w-md text-sm md:text-base font-semibold leading-relaxed text-[#2B211D]">
              Explore our curated selection of exquisite <br/>
              properties meticulously tailored to your <br/>
              unique dream home vision
            </p>
            <button className="mt-8 bg-[#2B211D] text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-[#1f1815] transition">
              Sign up
            </button>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <img
              src={home1}
              alt="Dream home"
              className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl object-contain scale-150 origin-center drop-shadow-md"
            />
          </div>
        </div>

        <SearchBox />
      </section>

      {/* WE HELP YOU SECTION */}
      <section className="px-6 md:px-12 lg:px-20 py-28 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          <div className="flex justify-center">
            <img
              src={home2}
              alt="Beautiful home"
              className="w-full max-w-lg rounded-3xl object-cover shadow-sm"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2B211D]">
              We Help You To Find
              <br />
              Your Dream Home
            </h2>

            <p className="mt-6 max-w-lg text-sm md:text-base font-semibold leading-relaxed text-[#2B211D]">
              From cozy cottages to luxurious estates, our <br/>
              dedicated team guides you through every step of the <br/>
              journey, ensuring your dream home becomes a reality
            </p>

            <div className="flex flex-wrap gap-12 mt-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#2B211D]">
                  8K+
                </h3>
                <p className="mt-1 text-xs md:text-sm font-semibold text-[#2B211D]">
                  Houses Available
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#2B211D]">
                  6K+
                </h3>
                <p className="mt-1 text-xs md:text-sm font-semibold text-[#2B211D]">
                  Houses Sold
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#2B211D]">
                  2K+
                </h3>
                <p className="mt-1 text-xs md:text-sm font-semibold text-[#2B211D]">
                  Trusted Agents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;