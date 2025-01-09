export default function Newsletter() {
  return (
    <div className="bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)] p-8 text-center text-white">
      <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="mb-4">
        Get updates on new services, special offers, and astrological insights delivered to your inbox.
      </p>
      <form className="flex justify-center items-center gap-2 mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 w-64 border border-white bg-white text-black"
        />
        <button className="bg-yellow-500 text-black py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <p className="text-sm">
        © 2024 Sunshine Astro. All Rights Reserved. <br />
        Your trusted partner for astrological guidance and spiritual insights.
      </p>
    </div>
  );
} 