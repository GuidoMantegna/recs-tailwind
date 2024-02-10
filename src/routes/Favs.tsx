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
  const { replies, setReplies, loading, error } = useReplies(user?._id, pathname)
  // console.log(pathname.charAt(1).replace('/', ''))

  const handleLike = async (replyID: string) => {
    // fetchData(`replies/${replyID}`, 'patch', { userID: user?._id }).then(
    //   (data) => {
    //     const newAsks = asks ? [...asks] : []
    //     const replyIndex = newAsks[0].replies.findIndex(
    //       (reply) => reply._id === replyID
    //     )
    //     newAsks[0].replies[replyIndex] = data?.reply
    //     setAsks(newAsks)
    //   }
    // )
  }
  if (loading) return <Loading />
  if (error) return <Error />
  return (
    <div>
      <div className='flex items-center gap-3 mb-4'>
        <img
          src={`${STATIC_BASE_URL}/img/users/user-${user?._id}.jpeg`}	
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
            handleLike={handleLike}
          />
        ))}
    </div>
  )
}

export default Favs
