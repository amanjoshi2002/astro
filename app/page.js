import Section1 from "./components/section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

import ContactForm from "./components/ContactForm";
import Section5 from "./components/Section5";
import EndSection from "./components/endsection";



export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <ContactForm/>
      <EndSection/>
      <main className="flex flex-col gap-8 items-center">
        {/* Other content can go here */}
      </main>
    </div>
  );
}
