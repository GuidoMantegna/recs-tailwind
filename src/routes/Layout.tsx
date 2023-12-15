import Header from 'components/Header/Header'
import Navbar from 'components/Navbar'

interface LayoutProps {
  // children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="h-full">
      <Header />
      <p>Layout</p>
      <Navbar />
    </div>
  )
}

export default Layout
