import { useContext, useState } from 'react'
import { AuthContext, Login } from 'context'
import { useFetch } from 'customHooks'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

interface toggleBTNProps {
  toggleTheme: () => void
  theme: string
}

const ToggleBTN: React.FC<toggleBTNProps> = ({ toggleTheme, theme }) => (
  <button onClick={toggleTheme}>
    {theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
  </button>
)

const Header = () => {
  const user = useContext(AuthContext)
  const login = useContext(Login)
  const { fetchData } = useFetch()
  const [theme, setTheme] = useState('light')

  const logout = () =>
    fetchData('users/logout', 'get').then(() => {
      login(null)
      toast.info('Logout successful')
    })

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme')
    if (!theme) return localStorage.setItem('theme', 'dark')
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }

  return (
    <header className="flex justify-between items-center p-5 relative z-10">
      <Link to="" className="font-bold  text-2xl">
        🎥 RECS
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="profile" className="text-lg custom-link">
              Profile
            </Link>
            <Link
              to="login"
              className="text-lg custom-link"
              onClick={() => logout()}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="login" className="text-lg custom-link">
              Login
            </Link>
            <Link to="signup" className="text-lg custom-link">
              Sign up
            </Link>
          </>
        )}
        <ToggleBTN toggleTheme={toggleTheme} theme={theme} />
      </div>
    </header>
  )
}

export default Header
