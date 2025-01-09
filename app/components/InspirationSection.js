export default function InspirationSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)] p-8">
      <div className="text-center text-white mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Let the Stars Inspire Your Next Great Chapter
        </h1>
        <p className="text-lg mb-6">
          "The stars hold answers to your past, present, and future. Begin your
          journey of self-discovery guided by celestial wisdom."
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full font-semibold">
          Start Your Cosmic Journey
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="bg-[#3A0E00] text-white p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-4">Artificial Intelligence (AI)</h2>
          <p>
            Are you curious about how Artificial Intelligence can revolutionize
            your astrological experience? Discover the future of astrology with
            our advanced AI astrology services.
          </p>
        </div>
        <div className="bg-[#3A0E00] text-white p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-4">WHY ASTROLOGY ?</h2>
          <p>
            Astrology is a predictive science with its own sets of methods,
            claims, and findings that have forever inspired and allowed people
            with insights into different aspects of their life.
          </p>
        </div>
        <div className="bg-[#3A0E00] text-white p-6 rounded-lg shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-4">
            Online Astrology Consultation & Services
          </h2>
          <p>
            The online footprint of things and people has grown over the years.
            And AstroLife, as a brand, is using the best of it to cater online
            astrology services to anyone and everyone across the length and
            breadth of the globe.
          </p>
        </div>
      </div>
    </div>
  );
} 