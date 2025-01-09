import Image from "next/image";

export default function InspirationSection() {
  return (
    <div
  className="relative min-h-[35vh] p-20"
  style={{
    background: "linear-gradient(180deg, rgba(227, 68, 0, 1), rgba(247, 108, 40, 1), rgba(227, 68, 0, 1))",
  }}
>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/center.svg"
          alt="Background SVG"
          layout="fill"
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 text-center text-white mb-4">
        <h1 className="text-2xl font-bold mb-2">
          Let the Stars Inspire Your Next Great Chapter
        </h1>
        <p className="text-xl mb-4">
          "The stars hold answers to your past, present, and future. Begin your
          journey of self-discovery guided by celestial wisdom."
        </p>
        <button className="bg-orange-500 text-white py-3 px-6 rounded-full font-semibold text-lg">
          Start Your Cosmic Journey
        </button>
      </div>
    </div>
  );
} 