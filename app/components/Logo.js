import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/logo.png" // Update with your logo path
        alt="Astrolife Logo"
        width={104} // Adjust width as needed
        height={104} // Adjust height as needed
      />
    </div>
  );
};

export default Logo; 