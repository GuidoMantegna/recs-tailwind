import { useLocation } from 'react-router-dom'
// Context
import { useContext } from 'react'
import { AuthContext } from 'context'
// Components
import { Loading, Reply, Error } from 'components'
// Custom hooks / Utils
import useReplies from 'customHooks/useReplies'
import { STATIC_BASE_URL } from 'utils/constants'

const Favs: React.FC = () => {
  const user = useContext(AuthContext)
  const { pathname } = useLocation()
  const { replies, loading, error } = useReplies(user?._id, pathname)

  if (loading) return <Loading />
  if (error) return <Error />
  return (
    <div>
      <div className='flex items-center gap-3 mb-4'>
        <img
          src={`${STATIC_BASE_URL}/img/users/user-${user?._id}.jpeg`}	
          onError={(e) => e.currentTarget.setAttribute('src', '/img/users/default.webp')}
          alt="user photo"
          className="rounded-full w-12"
        />
        <p className="text-lg font-semibold">My {pathname.slice(1)}</p>
      </div>
      {replies &&
        replies.map((reply) => (
          <Reply
            {...reply}
            loggedUserId={user?._id}
            key={reply._id}
            handleLike={() => {}}
          />
        ))}
    </div>
  )
}

export default Favs
