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
  const { fetchData, loadingData } = useFetch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, form: User) => {
    e.preventDefault()
    fetchData(`users${pathname}`, 'post', form).then((data) => {
      login({ ...data.data.user, token: data.token })
      toast.success('Login successful')
      navigate('/home')
    })
  }

  return (
    <div className="w-3/4 m-auto">
      <LoginForm
        handleSubmit={handleSubmit}
        usedFor={pathname}
        btnLoading={loadingData}
      />
    </div>
  )
}

export default Login
