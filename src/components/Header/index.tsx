import { useContext } from 'react'
import { AuthContext, Login } from 'context'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Header = () => {
  const user = useContext(AuthContext)
  const login = useContext(Login)
  const loginLogout = async () => {
    if (user) {
      axios.get('http://localhost:1234/api/v1/users/logout')
      login(null)
      toast.info('Logout successful')
    }
  }

  return (
    <header className="flex justify-between items-center p-5">
      <p className="font-bold  text-2xl">🎥 RECS</p>
      <div>
        <Link
          to="login"
          className="text-lg mr-4 custom-link"
          onClick={loginLogout}
        >
          {user ? 'Logout' : 'Login'}
        </Link>
        <Link to="signup" className="text-lg custom-link">
          Sign up
        </Link>
      </div>
    </header>
  )
}

export default Header
