
import Header from "./header";
import CigarettePacket from "./cigaratte/page";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Welcome to Puff & Pass</h1>
        <p className="mt-4 text-lg sm:text-xl">Your onestop destination for quality cigarettes.</p>
        <button className="mt-6 bg-amber-600 text-white py-2 px-6 rounded-lg hover:bg-amber-500">
          Explore Now
        </button>
      </section>

      {/* Cigarette Packet Section */}
      <CigarettePacket />

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; 2024 Puff & Pass. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 hover:underline">Facebook</a>
            <a href="#" className="hover:text-gray-400 hover:underline">Twitter</a>
            <a href="#" className="hover:text-gray-400 hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
