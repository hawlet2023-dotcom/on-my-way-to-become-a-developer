import locationIcon from "../assets/icons/location.png";
import userIcon from "../assets/icons/user2.png";
import documentIcon from "../assets/icons/document.png";
import handshakeIcon from "../assets/icons/handshake.png";

function WhyChooseUs() {
  const features = [
    {
      icon: locationIcon,
      title: "Expert Guidance",
      p1: "Benefit from our team's seasoned expertise",
      p2: "for a smooth buying experience",
    },
    {
      icon: userIcon,
      title: "Personalized Service",
      p1: "Our services adapt to your unique needs,",
      p2: "making your journey stress-free",
    },
    {
      icon: documentIcon,
      title: "Transparent Process",
      p1: "Stay informed with our clear and honest approach",
      p2: "to buying your home",
    },
    {
      icon: handshakeIcon,
      title: "Exceptional Support",
      p1: "Providing peace of mind with our responsive",
      p2: "and attentive customer service",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
      {/* HEADING */}
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B211D]">
          Why Choose Us
        </h2>
        <p className="mt-4 text-sm md:text-base font-semibold text-[#2B211D] leading-relaxed">
          Elevating Your Home Buying Experience with Expertise, Integrity, <br/>
          and Unmatched Personalized Service
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#E2CEBF] rounded-2xl p-6 text-center shadow-xs flex flex-col items-center justify-between"
          >
            <div className="w-14 h-14 mb-6 rounded-xl bg-white flex items-center justify-center p-3">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-base font-bold text-[#2B211D]">
              {item.title}
            </h3>
            
            {/* PARAGRAPH WITH BREAK */}
            <p className="mt-3 text-xs font-semibold leading-relaxed text-[#2B211D]">
              {item.p1}
              <br />
              {item.p2}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;