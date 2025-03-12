import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4 gap-5">
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/products">محصولات</Link>
          </li>
          <li>
            <Link href="/services">خدمات</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
