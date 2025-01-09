import Image from "next/image";

const LiveAstrologer = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center space-x-28">
        <div className="w-1/2">
          <Image
            src="/images/astrologer.png" // Replace with your image path
            alt="Live Astrologer"
            width={300}
            height={600}
            className="mx-auto"
          />
        </div>
        <div className="w-1/2 text-white text-center">
          <h2 className="text-6xl font-bold mb-4">Live</h2>
          <h2 className="text-6xl font-bold mb-4">Astrologer</h2>
          <p className="text-5xl mb-2">Ask questions,</p>
          <p className="text-5xl">get solutions</p>
        </div>
      </div>
    </div>
  );
};

export default LiveAstrologer; 