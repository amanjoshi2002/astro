import Image from "next/image";

const Channel = () => {
  return (
    <div className="py-8 px-4">
      <div className="flex items-center justify-center space-x-8 mb-8">
        <div className="text-white text-7xl font-bold leading-tight">
          <div>Astrolife</div>
          <div>Channel</div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/images/astro.png"
            alt="Astrolife Channel"
            width={320}
            height={180}
          />
        </div>
      </div>

      <div className="flex justify-center space-x-28 mb-10">
        <div
          className="text-white p-6 shadow-lg w-100 flex items-center justify-between"
          style={{
            borderRadius: '10px',  // Reduced roundness
            border: '3px solid #FFF',
            background: 'linear-gradient(180deg, #C24200 0%, #950000 100%)',
          }}
        >
          <div className="flex-shrink-0">
            <Image
              src="/images/rudraksh.png"
              alt="Buy Rudraksh"
              width={128}
              height={128}
            />
          </div>
          <div className="flex-grow text-center ml-4">
            <h3 className="text-xl font-bold mb-2">Buy Rudraksh</h3>
            <p className="mb-4">
              Best quality Rudraksh <br /> with assurance of AstroLife.com
            </p>
            <div className="flex justify-center">
              <button className="bg-yellow-500 text-black px-4 py-2">Buy Now</button> {/* Square edges */}
            </div>
          </div>
        </div>

        <div
          className="text-white p-6 shadow-lg w-100 flex items-center justify-between"
          style={{
            borderRadius: '10px',  // Reduced roundness
            border: '3px solid #FFF',
            background: 'linear-gradient(180deg, #C24200 0%, #950000 100%)',
          }}
        >
          <div className="flex-shrink-0">
            <Image
              src="/images/yantras.png"
              alt="Buy Yantras"
              width={128}
              height={128}
            />
          </div>
          <div className="flex-grow text-center ml-4">
            <h3 className="text-xl font-bold mb-2">Buy Yantras</h3>
            <p className="mb-4">
              Take advantage of Yantra <br /> with assurance of AstroLife.com
            </p>
            <div className="flex justify-center">
              <button className="bg-yellow-500 text-black px-4 py-2">Buy Now</button> {/* Square edges */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white p-6 shadow-lg w-full max-w-2xl mx-auto flex flex-col items-center"
        style={{
          borderRadius: '10px',  // Reduced roundness
          border: '3px solid #FFF',
          background: 'linear-gradient(180deg, #C24200 0%, #950000 100%)',
        }}
      >
        <h3 className="text-xl font-bold mb-4 text-center">Reports</h3>
        <ul className="list-disc list-inside mb-4 text-center">
          <li>2025 Personalized Horoscope - ₹2997/-</li>
          <li>Marriage Report</li>
          <li>Career / Job</li>
          <li>Finance</li>
          <li>Health & Fitness</li>
        </ul>
        <div className="flex justify-center">
          <button className="bg-yellow-500 text-black px-4 py-2">Order Now</button> {/* Square edges */}
        </div>
      </div>
    </div>
  );
};

export default Channel;
