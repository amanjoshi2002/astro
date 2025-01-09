export default function Calendar() {
  return (
    <div className="flex items-center gap-16">
      <div className="text-white text-7xl font-bold text-center leading-tight flex flex-col justify-center items-center">
        <p className="mb-2">PERFECT</p>
        <p className="mb-2">CALENDAR</p>
        <p className="mb-2">FOR</p>
        <p>YOU.</p>
      </div>
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full" style={{ background: "linear-gradient(180deg, rgba(251, 150, 1, 1), rgba(236, 58, 1, 1))" }}>
          <thead>
            <tr className="text-left" style={{ backgroundColor: "#FFE4A9" }}>
              <th className="py-2 px-4">Festivals</th>
              <th className="py-2 px-4">Holidays</th>
              <th className="py-2 px-4">Calendar</th>
            </tr>
          </thead>
          <tbody>
            {["Pongal 2025", "Mahashivratri 2025", "Holika Dahan 2025", "Holi 2025", "Cheti Chand 2025"].map((event, index) => (
              <tr key={index}>
                <td className="border-t border-orange-200 py-2 px-4 text-white">{event}</td>
                <td className="border-t border-orange-200 py-2 px-4 text-white"></td>
                <td className="border-t border-orange-200 py-2 px-4 text-white"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 