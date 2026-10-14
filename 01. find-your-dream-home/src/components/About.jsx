// 1. UPDATE IMPORTS AT THE TOP
import bed1 from "../assets/images/bed1.png";
import bed2 from "../assets/images/bed2.png"; // <-- Check if .png or .jpg in your folder
import bed3 from "../assets/images/bed3.png";

import profile1 from "../assets/icons/profile1.png";
import profile2 from "../assets/icons/profile2.png"; // <-- Check if .png or .jpg in your folder
import profile3 from "../assets/icons/profile3.png";

function About() {
  const reviews = [
    {
      image: bed1,
      avatar: profile1,
      name: "Sarah Nguyen",
      location: "San Francisco",
      rating: "5.0",
      text: "Dwello truly cares about their clients.  They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    },
    {
      image: bed2, 
      avatar: profile2, // <-- Changed from profile1 to profile2
      name: "Michael Rodriguez",
      location: "San Diego",
      rating: "4.5",
      text: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    },
    {
      image: bed3,
      avatar: profile3,
      name: "Emily Johnson",
      location: "Los Angeles",
      rating: "5.0",
      text: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    },
  ];

  return (
    <section className="bg-[#FFF8F0] px-6 md:px-12 lg:px-20 py-20">
      {/* SECTION TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2B211D]">
          What People Say
          <br />
          About Dwello
        </h2>
      </div>

      {/* REVIEWS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#E2CEBF] rounded-3xl overflow-hidden shadow-xs flex flex-col justify-between"
          >
            {/* INTERIOR PHOTO */}
            <div className="w-full h-52">
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CARD BODY */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              {/* USER PROFILE HEADER */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover bg-white p-0.5"
                  />
                  <div>
                    <h3 className="text-sm font-extrabold text-[#2B211D]">
                      {review.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#2B211D]/80">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* RATING BADGE */}
                <div className="bg-white px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs">
                  <span className="text-yellow-500 text-xs">★</span>
                  <span className="text-xs font-extrabold text-[#2B211D]">
                    {review.rating}
                  </span>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="mt-5 text-xs font-semibold text-[#2B211D] leading-relaxed">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          aria-label="Previous"
          className="w-11 h-11 rounded-full bg-[#2B211D] text-white flex items-center justify-center hover:bg-[#1f1815] transition shadow-xs cursor-pointer"
        >
          <svg
            className="w-5 h-5 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          aria-label="Next"
          className="w-11 h-11 rounded-full bg-[#2B211D] text-white flex items-center justify-center hover:bg-[#1f1815] transition shadow-xs cursor-pointer"
        >
          <svg
            className="w-5 h-5 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default About;