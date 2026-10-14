import home3 from "../assets/images/home3.png";
import home4 from "../assets/images/home4.png";
import home5 from "../assets/images/home5.png";

import locationPin from "../assets/icons/location.png";
import bedIcon from "../assets/icons/rooms.png";
import sizeIcon from "../assets/icons/size.png";

function PopularResidences() {
  const residences = [
    {
      image: home3,
      location: "San Francisco, California",
      rooms: "4 Rooms",
      size: "3,500 sq ft",
      price: "$2,500,000",
    },
    {
      image: home4,
      location: "Beverly Hills, California",
      rooms: "3 Rooms",
      size: "1,500 sq ft",
      price: "$850,000",
    },
    {
      image: home5,
      location: "Palo Alto, California",
      rooms: "6 Rooms",
      size: "4,000 sq ft",
      price: "$3,700,000",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B211D]">
          Our Popular Residences
        </h2>
      </div>

      {/* RESIDENCE CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {residences.map((residence, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl bg-[#E2CEBF] shadow-xs flex flex-col"
          >
            {/* INCREASED IMAGE HEIGHT (h-80 / h-96 for longer images) */}
            <div className="w-full h-80 sm:h-96">
              <img
                src={residence.image}
                alt={residence.location}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>

            {/* CONTENT CARD */}
            <div className="p-6 flex flex-col justify-between flex-1">
              {/* LOCATION */}
              <div className="flex items-center gap-2 text-sm font-bold text-[#2B211D]">
                <img
                  src={locationPin}
                  alt="location"
                  className="w-4 h-4 object-contain"
                />
                <span>{residence.location}</span>
              </div>

              {/* ROOMS & SQ FT DETAILS */}
              <div className="flex items-center gap-6 mt-4 text-xs font-bold text-[#2B211D]">
                <div className="flex items-center gap-1.5">
                  <img
                    src={bedIcon}
                    alt="rooms"
                    className="w-4 h-4 object-contain"
                  />
                  <span>{residence.rooms}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <img
                    src={sizeIcon}
                    alt="size"
                    className="w-4 h-4 object-contain"
                  />
                  <span>{residence.size}</span>
                </div>
              </div>

              {/* BUTTON & PRICE */}
              <div className="flex items-center justify-between mt-6">
                <button className="bg-[#2B211D] text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#1f1815] transition">
                  Sign up
                </button>

                <span className="text-base font-extrabold text-[#2B211D]">
                  {residence.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularResidences;