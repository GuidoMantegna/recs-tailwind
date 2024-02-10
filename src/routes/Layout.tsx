import React, { useContext, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AuthContext } from 'context'
// Components
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import { ToastContainer } from 'react-toastify'

const Layout: React.FC = () => {
  const user = useContext(AuthContext)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen lg:mx-[15%] dark:text-white dark:bg-slate-900">
      <ToastContainer position="top-center" theme="colored" />
      <Header />
      <div className={`flex flex-col flex-1 items-center p-10 pb-20 md:pb-4`}>
        <div className="w-full max-w-[500px]">
          <Outlet />
        </div>
      </div>
      {user && <Navbar />}
      <Link
        to="https://guidomantegna.github.io/GuidoMantegna/"
        target="blank"
        className="text-sm text-center italic pb-2"
      >
        Developed by Guido Mantegna
      </Link>
    </div>
  )
}

export default Layout
