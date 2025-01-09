import Footer from './Footer';
import Newsletter from './Newsletter';

export default function EndSection() {
  return (
    <div>
      {/* Gradient background for the section */}
      <div
        className="min-h-screen flex flex-col justify-between"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(227, 68, 0, 1),
            rgba(247,108,40,1)
          )`,
        }}
      >
        {/* Yellow line above the footer */}
        <div className="border-t-4 border-yellow-500"></div>
        <Footer />


        {/* Yellow line below the newsletter */}
        <div className="border-t-4 border-yellow-500"></div>

        <Newsletter />

      </div>
    </div>
  );
}
