import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Channel from "./components/Channel";
import Horoscope from "./components/Horoscope";
import Offers from "./components/Offers";
import LiveAstrologer from "./components/LiveAstrologer";
import Calendar from "./components/Calendar";
import InspirationSection from "./components/InspirationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
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
        <Horoscope />
        <Offers />
        <LiveAstrologer />
        <Calendar />
        <InspirationSection />
        <ContactForm />
        <Footer />
        <Newsletter />
      </div>
      <main className="flex flex-col gap-8 items-center">
        {/* Other content can go here */}
      </main>
    </div>
  );
}
