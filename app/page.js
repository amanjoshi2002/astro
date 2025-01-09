import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Channel from "./components/Channel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E34400] to-[rgba(255, 138, 60, 0.64)] relative">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('/images/vector.svg')",
          opacity: 0.1,
        }}
      ></div>
      <div className="relative z-10">
        <Navbar />
        <SubNavbar />
        <Hero />
        <Services />
        <Channel />
      </div>
      <main className="flex flex-col gap-8 items-center">
        {/* Other content can go here */}
      </main>
    </div>
  );
}
