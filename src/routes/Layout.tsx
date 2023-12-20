import { Outlet } from 'react-router-dom'
import Header from 'components/Header/Header'
import Navbar from 'components/Navbar'

interface LayoutProps {
  // children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex flex-col items-center p-10 pb-20">
        <Outlet />
      </div>
      <Navbar />
    </div>
  )
}

export default Layout
