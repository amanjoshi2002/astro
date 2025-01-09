import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-transparent p-4"> {/* Set background to transparent */}
      <h1 className="text-5xl font-bold text-white mb-4">
        Harness the Energy of the
      </h1>
      <h1 className="text-5xl font-bold text-white mb-6">
        Cosmos for a Fulfilling Life
      </h1>
      <p className="text-lg text-white mb-6">“Awaken Your Potential”</p>
      <a
        href="#"
        className="flex justify-center items-center gap-2 px-4 py-2 w-[250px] h-[60px] rounded-[25px] bg-gradient-to-r from-[#B20101] to-[#C42700] transition duration-300 hover:opacity-90 mb-8"
      >
        Get Started
      </a>
      <div className="flex justify-center space-x-24">
        <div className="flex flex-col items-center">
          <Image src="/images/Ringer.png" alt="Talk to Astrologer" width={64} height={64} />
          <span className="text-white text-xl">Talk to Astrologer</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/Communication.png" alt="Chat with Astrologer" width={64} height={64} />
          <span className="text-white text-xl">Chat with Astrologer</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/Shopping.png" alt="Astromall Shop" width={64} height={64} />
          <span className="text-white text-xl">Astromall Shop</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/Hindu.png" alt="Book a Pooja" width={64} height={64} />
          <span className="text-white text-xl">Book a Pooja</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;