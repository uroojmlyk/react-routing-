import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-blue-600">
      <Link
        to="/"
        className="px-4 py-2 text-white transition rounded hover:bg-blue-800"
      >
    Home
      </Link>
     <Link to="/about" className='px-4 py-2 text-white transition rounded hover:text-black hover:bg-blue-800'>
     About
     </Link>
    <Link to="/contact" className='px-4 py-2 text-white transition rounded hover:text-black hover:bg-blue-800'>
     Contact
     </Link> <Link to="/login" className='px-4 py-2 text-white transition rounded hover:text-black hover:bg-blue-800'>
     Login
     </Link> <Link to="/footer" className='px-4 py-2 text-white transition rounded hover:text-black hover:bg-blue-800'>
     Footer
     </Link>


    </nav>
  )
}

export default Navbar
