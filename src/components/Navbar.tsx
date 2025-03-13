import { GoHome } from 'react-icons/go'
import { BiCategory } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'
import { GoHeart } from 'react-icons/go'

import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg text-gray-700 p-4 fixed flex justify-center items-center bottom-0 h-20 w-full">
      <nav>
        <ul className="flex space-x-4 gap-12 justify-center items-center">
          <li>
            <Link href="/">
              <GoHome size={32} />
            </Link>
          </li>
          <li>
            <Link href="/products">
              <BiCategory size={32} />
            </Link>
          </li>
          <li>
            <Link href="/services">
              <GoSearch size={32} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <GoHeart size={32} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
