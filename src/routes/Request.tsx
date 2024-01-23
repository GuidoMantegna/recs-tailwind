import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AskForm from 'components/AskForm'
import Ask from 'components/Ask'
import useRequests from '../customHooks/useRequests'
import { GoCommentDiscussion, GoQuestion, GoHeart, GoHeartFill } from 'react-icons/go'
import { getFormattedDate } from 'utils'
import { useContext } from 'react'
import { AuthContext } from 'context'
import axios from 'axios'

const Request: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { asks, loading, error } = useRequests(id)
  const user = useContext(AuthContext)
  // const [isLiked, setIsLiked] = useState(false)
  const handleLike = async (replyID: string) => {
    try {
      await axios.patch(`http://localhost:1234/api/v1/replies/${replyID}`, {
        userID: user?._id
      })
    } catch (error) {
      console.log(error)
    }
  }
  const isLiked = asks?.[0].replies[0].likes.some((like) => like._id === user?._id)
  return (
    <>
      {loading || !asks ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="w-full mb-6">
            <div className="flex items-center gap-2">
              <img
                src="/img/users/user-7.jpg"
                alt="user photo"
                className="rounded-full w-10"
              />
              <p className="">{asks[0].user.name}</p>
              <span className="font-extralight text-sm">{getFormattedDate(asks[0].createdAt)}</span>
            </div>
            <div className="border p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2">
              {asks[0].brief}
            </div>
          </div>
          {asks[0].replies.map((reply) => (
            <div className="w-full" key={reply._id}>
            <div className="flex items-center justify-end gap-2">
              <p className="">{reply.user.name}</p>
              <img
                src="/img/users/user-7.jpg"
                alt="user photo"
                className="rounded-full w-10"
              />
            </div>
            <div className="border p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box-right my-2">
              {reply.reply}
            </div>
            <div className="flex justify-end items-center gap-2 text-sm">
              <button className='flex gap-1 pr-2' onClick={() => handleLike(reply._id)}>
                {isLiked ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
                {reply.numLikes}
              </button>
            </div>
          </div>
          ))}
        </>
      )}
    </>
  )
}
export default Request
