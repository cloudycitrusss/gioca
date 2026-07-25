import { Outlet } from 'react-router-dom'
import { ScrollToTop } from '../ScrollToTop'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import './Layout.css'

export function Layout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
