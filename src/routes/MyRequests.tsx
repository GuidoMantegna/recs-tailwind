// Context
import { useContext } from 'react'
import { AuthContext } from 'context'
import { useLocation } from 'react-router-dom'
// Components
import { Loading, Error, Ask, Avatar } from 'components'
// Custom hooks / Utils
import { useAsks } from 'customHooks'
import { STATIC_BASE_URL } from 'utils/constants'

const MyRequest: React.FC = () => {
  const user = useContext(AuthContext)
  const { asks, loading, error } = useAsks(user?._id, 'userRequests')
  const { pathname } = useLocation()

  if (error) return <Error />
  if (loading) return <Loading />
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Avatar classes="w-12" />
        {/* USED FOR STATIC IMGS UPLOADED WITH MULTER */}
        {/* <img
          src={`${STATIC_BASE_URL}/img/users/user-${user?._id}.jpeg`}
          onError={(e) =>
            e.currentTarget.setAttribute('src', '/img/users/default.webp')
          }
          alt="user photo"
          className="rounded-full w-12"
        /> */}
        <p className="text-lg font-semibold">My {pathname.slice(1)}</p>
      </div>
      {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
    </div>
  )
}
export default MyRequest
