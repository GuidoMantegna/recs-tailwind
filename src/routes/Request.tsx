import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReplyForm from 'components/ReplyForm'
import Modal from 'components/Modal'
import useRequests from '../customHooks/useRequests'
import { GoCommentDiscussion } from 'react-icons/go'
import { getFormattedDate } from 'utils'
import { useContext } from 'react'
import { AuthContext } from 'context'
import Reply from 'components/Reply'
import { ReplyFormState } from 'interfaces'

const Request: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { asks, loading, error } = useRequests(id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const user = useContext(AuthContext)
  const isLiked = asks?.[0].replies[0].likes.some(
    (like) => like._id === user?._id
  )
  const handleReplySubmit = async (form: ReplyFormState) => {
    console.log(form)
    try {
      await axios.post(`http://localhost:1234/api/v1/requests/${asks?.[0]._id}/replies`, {
        ...form,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {loading || !asks ? (
        <p>Loading...</p>
      ) : (
        <>
          <Modal
            onClose={() => setIsModalOpen(!isModalOpen)}
            isOpen={isModalOpen}
          >
            <ReplyForm
              onSubmit={handleReplySubmit}
              closeModal={() => setIsModalOpen(!isModalOpen)}
            />
          </Modal>
          <div className="w-full mb-6">
            <div className="flex items-center gap-2">
              <img
                src="/img/users/user-7.jpg"
                alt="user photo"
                className="rounded-full w-10"
              />
              <p className="">{asks[0].user.name}</p>
              <span className="font-extralight text-sm">
                {getFormattedDate(asks[0].createdAt)}
              </span>
            </div>
            <div className="p-4 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2 bg-slate-100">
              {asks[0].brief}
            </div>
            <div className="flex items-center gap-2 pl-4">
              <GoCommentDiscussion size={20} />
              {`${asks[0].replies.length} ${
                asks[0].replies.length > 1 ? 'Replies' : 'Reply'
              }`}
            </div>
            <div className="w-full flex justify-center">
              <button
                className="custom-btn w-40 my-4"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Reply
              </button>
            </div>
          </div>
          {asks[0].replies.map((reply) => (
            <Reply {...reply} isLiked={isLiked} key={reply._id} />
          ))}
        </>
      )}
    </>
  )
}
export default Request
