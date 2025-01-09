import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Hero from "./Hero";

export default function Section1() {
  return (
    <div className="relative z-1 bg-[linear-gradient(to_bottom,rgba(227,68,0,1),rgba(247,108,40,1),rgba(247,108,40,1))]">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover z-0 bg-[center_top]"
        style={{
          backgroundImage: "url('/images/vector.svg')",
          opacity: 0.1,
        }}
      ></div>

      <Navbar />
      <SubNavbar />
      <Hero />
    </div>
  );
}