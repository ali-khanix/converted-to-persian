import './custom.css'
import Navbar from '@/components/Navbar'
import './../styles/globals.css'
import { iranYekan } from '@/app/fonts/fonts'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${iranYekan.variable} font-iranYekan dir-rtl`}>
      <main className="relative">
        <Navbar />
        {children} {/* This renders the content of individual pages */}
      </main>
    </div>
  )
}

export default Layout
