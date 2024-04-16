import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header>
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <img src="/logos/logo-dark.svg" alt="logo" width={170} height={50} />
        </Link>
        <form className="p-3 rounded-lg flex items-center border border-current">
          <input
            type="text"
            placeholder="search for anything..."
            className="focus:outline-none w-24 sm:w-64 bg-transparent"
          />
          <button>
            <FaSearch />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="">Home</li>
          </Link>
          <Link to="/about">
            <li className="">About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-6 w-6 object-cover"
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="">Sign in</li>
            )}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
