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
import { STATIC_BASE_URL } from 'utils/constants'

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
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('photo', form.photo)
    const userData = form.photo ? formData : form
    fetchData(`users/${user?._id}`, 'patch', userData).then((data) => {
      login(data.user)
      toast.success('Data updated successfully')
      form.photo && window.location.reload()
    })
  }

  // if (loadingData) return <Loading />
  if (errorData) return <Error />
  return (
    <div className='w-3/4 m-auto'>
      <div className='flex items-center justify-center gap-3 mb-6'>
        <img
          src={user ? `${STATIC_BASE_URL}/img/users/user-${user?._id}.jpeg` : undefined}	
          onError={(e) => e.currentTarget.setAttribute('src', '/img/users/default.webp')}
          alt="user photo"
          className="rounded-full w-20 border p-1"
        />
        <p className="text-lg font-semibold">Welcome {user?.name}!</p>
      </div>
      <LoginForm handleSubmit={handleSubmit} usedFor={pathname} btnLoading={loadingData}/>
    </div>
  )
}

export default Profile
