import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Shubh Muhurat Selection",
      description: "Choose the most auspicious time for important events in your life, aligned with cosmic energies....",
      image: "/images/shubh-muhurat.png",
    },
    {
      title: "Kundali Matching Services",
      description: "Ensure a perfect match for marriage with our detailed Kundali analysis by expert astrologers....",
      image: "/images/kundali-matching.png",
    },
    {
      title: "Vastu Consultation",
      description: "Create a positive living environment with Vastu tips and suggestions tailored to your space....",
      image: "/images/vastu-consultation.png",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center text-white text-3xl font-bold mb-8">COMPLIMENTARY ASTROLOGY SERVICES</h2>
      <div className="flex justify-center space-x-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#E34401] to-[#C5561B] text-white p-10 rounded-[25px] shadow-lg w-80 border-4 border-white"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={80} // Adjust width as needed
                height={100} // Adjust height as needed
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            <p className="mb-4 text-center line-clamp-4">{service.description}</p>
            <div className="flex justify-center">
              <button className="bg-red-600 text-white rounded-full px-4 py-2">READ MORE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
