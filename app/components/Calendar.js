export default function Calendar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)] flex justify-center items-center">
      <div className="flex items-center gap-16">
        <div className="text-white text-4xl font-bold text-right leading-tight flex flex-col justify-center">
          <p className="mb-2">PERFECT</p>
          <p className="mb-2">CALENDAR</p>
          <p className="mb-2">FOR</p>
          <p>YOU.</p>
        </div>
        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead>
              <tr
                className="text-left"
                style={{
                  background: "linear-gradient(180deg, #FB9601 0%, #EC3A01 100%)",
                }}
              >
                <th className="py-2 px-4">Festivals</th>
                <th className="py-2 px-4">Holidays</th>
                <th className="py-2 px-4">Calendar</th>
              </tr>
            </thead>
            <tbody>
              {["Pongal 2025", "Mahashivratri 2025", "Holika Dahan 2025", "Holi 2025", "Cheti Chand 2025"].map((event, index) => (
                <tr
                  key={index}
                  style={{
                    background: "linear-gradient(180deg, #FB9601 0%, #EC3A01 100%)",
                  }}
                >
                  <td className="border-t border-orange-200 py-2 px-4">{event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 