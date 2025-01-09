const SubNavbar = () => {
  return (
    <div
      className="p-4 z-20" 
      style={{
        background: "linear-gradient(to right, rgba(255, 255, 68, 1), rgba(255, 156, 44, 1))",
      }}
    >
      <div className="flex justify-center space-x-8 text-black">
        <a href="#" className="hover:underline">Free Kundli</a>
        <a href="#" className="hover:underline">Kundli Matching</a>
        <a href="#" className="hover:underline">Horoscopes</a>
        <a href="#" className="hover:underline">Rasifal</a>
        <a href="#" className="hover:underline">Healing</a>
        <a href="#" className="hover:underline">Panchang</a>
        <a href="#" className="hover:underline">Calendar</a>
      </div>
    </div>
  );
};

export default SubNavbar;
