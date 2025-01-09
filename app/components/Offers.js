const Offers = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)]">
      <h2 className="text-center text-4xl font-bold text-white mb-12">GRAB OFFERS NOW</h2>
      <div className="flex justify-center space-x-8">
        <div
          className="bg-gradient-to-b from-[#A00000] to-[#3A0000] text-white p-8 rounded-lg shadow-lg w-80"
          style={{
            border: '3px solid #FFF',
          }}
        >
          <h3 className="text-xl font-bold mb-4">Free Astro Consultation - 30 Min</h3>
          <p>Get personalized astrology insights from expert astrologers.</p>
        </div>
        <div
          className="bg-gradient-to-b from-[#A00000] to-[#3A0000] text-white p-8 rounded-lg shadow-lg w-80"
          style={{
            border: '3px solid #FFF',
          }}
        >
          <h3 className="text-xl font-bold mb-4">50% Off on First Pooja Service</h3>
          <p>Experience divine rituals and spiritual guidance at half the cost.</p>
        </div>
      </div>
    </div>
  );
};

export default Offers; 