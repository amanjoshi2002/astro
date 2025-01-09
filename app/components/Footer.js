import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)] p-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <h2 className="text-lg font-bold mb-2">About Sunsine Astro</h2>
          <p className="max-w-xs">
            Astro Services offers professional astrology consultations, helping
            people understand their destinies and make informed life choices.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Consult</li>
            <li>Horoscope</li>
            <li>Kundali</li>
            <li>Astrology</li>
            <li>Services</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Customer Support</h2>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Account Login</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">Stay Connected</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Email: support@astroservices.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 