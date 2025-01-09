import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Shubh Muhurat Selection",
      description: "Choose the most auspicious time for important events in your life, aligned with cosmic energies....",
      image: "/images/shubh-muhurat.png", // Placeholder for your image
    },
    {
      title: "Kundali Matching Services",
      description: "Ensure a perfect match for marriage with our detailed Kundali analysis by expert astrologers....",
      image: "/images/kundali-matching.png", // Placeholder for your image
    },
    {
      title: "Vastu Consultation",
      description: "Create a positive living environment with Vastu tips and suggestions tailored to your space....",
      image: "/images/vastu-consultation.png", // Placeholder for your image
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-center text-white text-2xl font-bold mb-8">COMPLIMENTARY ASTROLOGY SERVICES</h2>
      <div className="flex justify-center space-x-8">
        {services.map((service, index) => (
          <div key={index} className="bg-orange-500 text-white p-6 rounded-lg shadow-lg w-80 border border-white">
            <div className="flex justify-center mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={80} // Adjust width as needed
                height={100} // Adjust height as needed
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
            <p className="mb-4 text-center">{service.description}</p>
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