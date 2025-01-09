export default function Newsletter() {
  return (
    <div className="p-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="mb-4 text-lg">
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
      <p className="text-lg">
        © 2024 Sunshine Astro. All Rights Reserved. <br />
        Your trusted partner for astrological guidance and spiritual insights.
      </p>
    </div>
  );
} 