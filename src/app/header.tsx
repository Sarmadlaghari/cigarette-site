
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-amber-900 p-4 shadow-lg">
      <nav className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">Puff & Pass</h1>
          <img
            src="https://img.freepik.com/premium-vector/cigarette-logo_10250-4153.jpg"
            alt="logo"
            width={100}
            height={50}
            className="mt-2"
          />
        </div>

        <div className="flex justify-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Explore your brand"
            className="rounded-lg p-2 w-64 text-black"
          />
        </div>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <li>
            <Link className="text-white hover:text-gray-300 hover:underline" href="/home">Home</Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300 hover:underline" href="/about">About</Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300 hover:underline" href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



