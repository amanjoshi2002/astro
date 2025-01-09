import Logo from "./Logo"; // Import the Logo component

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="flex items-center justify-between p-2 bg-transparent">
      <Logo />
      <div className="flex space-x-8 text-white text-lg">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Language</a>
      </div>
      <button
        className="bg-red-600 text-white rounded-full px-4 py-1"
        onClick={onLoginClick}
      >
        LOGIN
      </button>
    </nav>
  );
};

export default Navbar; 