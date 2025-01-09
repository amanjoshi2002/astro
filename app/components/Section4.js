import Offers from "./Offers";
import LiveAstrologer from "./LiveAstrologer";
import Calendar from "./Calendar";
import Image from "next/image";

const Section4 = () => {
  return (
    <div
    style={{
      background: 'linear-gradient(to bottom, rgba(227,68,0,1), rgba(247, 108, 40, 1), rgba(227,68,0,1))',
    }}
    className="relative py-16 min-h-screen"
  >      <div className="absolute top-0 left-1 z-0 w-1/2 h-full">
        <Image
          src="/images/vector2.svg"
          alt="Decorative SVG"
          layout="fill"
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <Offers />
        <LiveAstrologer />
        <Calendar/>

      </div>
    </div>
  );
};

export default Section4; 