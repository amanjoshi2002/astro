export default function InspirationCards() {
    return (
      <div
        className="flex flex-col md:flex-row justify-center gap-8 p-8"
        style={{
          backgroundColor: "rgba(227, 68, 0, 1)", // Apply the background color to the entire component
        }}
      >
        <div
          className="flex flex-col justify-center items-center text-white p-2 rounded-lg shadow-lg max-w-sm"
          style={{
            backgroundColor: "rgba(90, 0, 2, 1)", // Card color
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Artificial Intelligence (AI)</h2>
          <p className="text-center">
            Are you curious about how Artificial Intelligence can revolutionize your astrological experience? Discover the future of astrology with our advanced AI astrology services.
            {/* Add the rest of your content here */}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center text-white p-6 rounded-lg shadow-lg max-w-sm"
          style={{
            backgroundColor: "rgba(90, 0, 2, 1)", // Card color
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-center">WHY ASTROLOGY?</h2>
          <p className="text-center">
            Astrology is a predictive science with its own sets of methods, claims, and findings that have forever inspired and allowed people with insights into different aspects of their life.
            {/* Add the rest of your content here */}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center text-white p-6 rounded-lg shadow-lg max-w-sm"
          style={{
            backgroundColor: "rgba(90, 0, 2, 1)", // Card color
          }}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Online Astrology Consultation & Services</h2>
          <p className="text-center">
            The online footprint of things and people has grown over the years. And AstroLife, as a brand, is using the best of it to cater online astrology services to anyone and everyone across the length and breadth of the globe.
            {/* Add the rest of your content here */}
          </p>
        </div>
      </div>
    );
  }
  