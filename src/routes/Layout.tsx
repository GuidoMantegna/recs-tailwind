import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import { ToastContainer } from 'react-toastify'
interface LayoutProps {
  // children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="h-full">
      <ToastContainer position="top-center" theme="colored" />
      <Header />
      <div className="flex flex-col items-center p-10 pb-20 md:pb-0 md:pl-[150px]">
        <div className='w-full md:w-1/2'>

        <Outlet />
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Layout
