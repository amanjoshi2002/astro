import Image from "next/image";

const Horoscope = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Random SVG Images */}
      <div className="absolute top-20 left-24">
        <Image src="/images/2.svg" alt="Gemini" width={150} height={300} /> {/* Increased size */}
      </div>
      <div className="absolute top-40 right-16">
        <Image src="/images/3.svg" alt="Leo" width={150} height={150} /> {/* Increased size */}
      </div>
      <div className="absolute bottom-20 left-32">
        <Image src="/images/4.svg" alt="Virgo" width={150} height={150} /> {/* Increased size */}
      </div>
      <div className="absolute bottom-10 right-28">
        <Image src="/images/5.svg" alt="Cancer" width={150} height={150} /> {/* Increased size */}
      </div>
      {/* Add Image 6 */}
      <div className="absolute top-15 right-40">
        <Image src="/images/6.svg" alt="Libra" width={150} height={150} /> {/* New image */}
      </div>

      {/* Center Card */}
      <div
        className="text-center p-20 max-w-xl mx-auto relative text-white"
        style={{
          borderRadius: '20px',
          border: '4px solid rgba(160, 0, 0, 1)', // Updated border color
        }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-[rgba(185,56,12,1)]"
          style={{ opacity: 0.4, borderRadius: '25px' }}
        ></div>

        <div className="relative z-10">
          <div className="absolute top-[-135px] left-1/2 transform -translate-x-1/2">
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
    </div>
  );
};

export default Horoscope;
