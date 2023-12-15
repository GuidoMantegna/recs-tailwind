import React from 'react'
import Header from '../Header/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <h1 className=' text-center font-bold  text-4xl m-6'>🎥 RECS</h1>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout