import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            <img src='../public/logos/logo-dark.svg' alt='logo' width={170} height={50} />
        </Link>
        <form className='p-3 rounded-lg flex items-center border border-current'>
            <input type='text' placeholder='search for anything' className='focus:outline-none w-24 sm:w-64' />
            <button>
                <FaSearch />
            </button>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
                <li className=''>
                    Home
                </li>
            </Link>
            <Link to='/about'>
                <li className=''>
                    About
                </li>
            </Link>
            <Link to='/sign-in'>
                <li className=''>
                    Sign in
                </li>
            </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
