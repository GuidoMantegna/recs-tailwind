import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from 'context'
// Components
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import { ToastContainer } from 'react-toastify'

const Layout: React.FC = () => {
  const user = useContext(AuthContext)
  return (
    <div className="h-full lg:mx-[15%]">
      <ToastContainer position="top-center" theme="colored" />
      <Header />
      <div
        className={`flex flex-col items-center p-10 pb-20 md:pb-4 ${
          user && 'md:pl-[150px]'
        }`}
      >
        <div className="w-full max-w-[400px]">
          <Outlet />
        </div>
      </div>
      {user && <Navbar />}
    </div>
  )
}

export default Layout
