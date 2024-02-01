import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Context
import { useContext } from 'react'
import { useLogin } from 'context'
import { AuthContext } from 'context'
// Components
import { Loading, LoginForm, Error } from 'components'
// Custom hooks / Utils
import { useFetch } from 'customHooks'
import { User } from 'interfaces'

const Profile: React.FC = () => {
  const user = useContext(AuthContext)
  const login = useLogin()
  const { pathname } = useLocation()
  const { fetchData, loadingData, errorData } = useFetch()

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    form: User
  ) => {
    e.preventDefault()
    fetchData(`users/${user?._id}`, 'patch', form).then((data) => {
      login(data.user)
      toast.success('Data updated successfully')
    })
  }

  if (loadingData) return <Loading />
  if (errorData) return <Error />
  return (
    <div>
      <div className='flex items-center gap-2'>
        <img
          src="/img/users/user-7.jpg"
          alt="user photo"
          className="rounded-full w-20"
        />
        <p className="text-lg">Welcome {user?.name}!</p>
      </div>
      <LoginForm handleSubmit={handleSubmit} usedFor={pathname}/>
    </div>
  )
}

export default Profile
