import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Context
import { useLogin } from 'context'
// Components
import { LoginForm } from 'components'
// Custom hooks / Utils
import { useFetch } from 'customHooks'
import { User } from 'interfaces'

const Login: React.FC = () => {
  const login = useLogin()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { fetchData } = useFetch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, form: User) => {
    e.preventDefault()
    fetchData(`users${pathname}`, 'post', form).then((data) => {
      login(data.user)
      toast.success('Login successful')
      navigate('/')
    })
  }

  return (
    <div className="w-3/4 m-auto">
      <LoginForm handleSubmit={handleSubmit} usedFor={pathname} />
    </div>
  )
}

export default Login
