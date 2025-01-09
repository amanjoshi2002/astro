import Logo from "./Logo"; // Import the Logo component

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 bg-transparent">
      <Logo />
      <div className="flex space-x-8 text-white text-lg">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Language</a>
      </div>
      <a
        className="bg-red-600 text-white rounded-full px-4 py-1"
        href="#"
      >
        LOGIN
      </a>
    </nav>
  );
};

export default Navbar; 