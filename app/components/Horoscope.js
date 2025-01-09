import Image from "next/image";

const Horoscope = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)]">
      {/* SVG Images */}
      <div className="absolute top-10 left-10">
        <Image src="/images/2.svg" alt="Gemini" width={80} height={80} />
      </div>
      <div className="absolute top-10 right-10">
        <Image src="/images/3.svg" alt="Leo" width={80} height={80} />
      </div>
      <div className="absolute bottom-10 left-10">
        <Image src="/images/4.svg" alt="Virgo" width={80} height={80} />
      </div>
      <div className="absolute bottom-10 right-10">
        <Image src="/images/5.svg" alt="Cancer" width={80} height={80} />
      </div>

      {/* Center Card */}
      <div
        className="text-center p-16 max-w-xl mx-auto relative"
        style={{
          borderRadius: '25px',
          border: '11px solid #000',
          background: 'linear-gradient(180deg, #A00000 0%, #3A0000 100%)',
          opacity: 0.9,
        }}
      >
        <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2">
          <Image src="/images/1.svg" alt="Aries" width={90} height={100} />
        </div>
        <div className="mt-20">
          <h3 className="text-4xl font-bold mb-6 text-white">Aries Daily Horoscope</h3>
          <p className="text-xl text-white mb-8">Monday, December 30, 2024</p>
          <p className="text-white text-xl">
            Smile as it is best antidote for all your problems. Improvement in finances will make it convenient for you to pay your long-standing dues and bills. Visit to a religious place or a saintly man brings solace and peace of mind. <a href="#" className="text-blue-300">More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Horoscope; 