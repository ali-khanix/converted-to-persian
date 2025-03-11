import Link from 'next/link'
import './custom.css'
import './../styles/globals.css'
import { iranYekan } from '@/app/fonts/fonts'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${iranYekan.variable} font-iranYekan dir-rtl`}>
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
      <main>
        {children} {/* This renders the content of individual pages */}
      </main>
    </div>
  )
}

export default Layout
