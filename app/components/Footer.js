import Image from "next/image";

export default function Footer() {
  return (
    <div className=" p-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="flex flex-col items-start ml-8"> {/* Added ml-4 to move logo to the right */}
      <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-xl text-yellow-500 font-bold mb-2">About Sunsine Astro</h2>
          <p className="max-w-xs text-lg">
            Astro Services offers professional astrology consultations, helping
            people understand their destinies and make informed life choices.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Quick Links</h2>
          <ul className="list-disc pl-5">
            <li className="text-lg">Home</li>
            <li className="text-lg">Consult</li>
            <li className="text-lg">Horoscope</li>
            <li className="text-lg">Kundali</li>
            <li className="text-lg">Astrology</li>
            <li className="text-lg">Services</li>
            <li className="text-lg">About Us</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Customer Support</h2>
          <ul className="list-disc pl-5">
            <li className="text-lg">Help Center</li>
            <li className="text-lg">Contact Us</li>
            <li className="text-lg">FAQs</li>
            <li className="text-lg">Account Login</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Stay Connected</h2>
          <ul className="list-disc pl-5">
            <li className="text-lg">Facebook</li>
            <li className="text-lg">Twitter</li>
            <li className="text-lg">Instagram</li>
            <li className="text-lg">YouTube</li>
            <li className="text-lg">Phone: +1 (234) 567-890</li>
            <li className="text-lg">Email: support@astroservices.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 