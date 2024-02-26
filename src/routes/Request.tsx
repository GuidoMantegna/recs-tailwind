import { useState } from 'react'
import { useParams } from 'react-router-dom'
// Context
import { useContext } from 'react'
import { AuthContext } from 'context'
// Components
import {
  ReplyForm,
  Modal,
  Loading,
  Error,
  Reply,
  AskSkeleton,
  Avatar
} from 'components'
// Custom hooks / Utils
import { useAsks, useFetch } from 'customHooks'
import { getFormattedDate } from 'utils'
import { ReplyFormState } from 'interfaces'
// Assets
import { GoCommentDiscussion } from 'react-icons/go'
import { STATIC_BASE_URL } from 'utils/constants'

const Request: React.FC = () => {
  const user = useContext(AuthContext)
  const { id } = useParams<{ id: string }>()
  const { asks, loading, error, setAsks } = useAsks(id, 'replies')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { loadingData, errorData, fetchData } = useFetch()

  const handleReplySubmit = async (form: ReplyFormState) => {
    setIsModalOpen(!isModalOpen)
    fetchData(`requests/${asks?.[0]._id}/replies`, 'post', form).then(
      (data) => {
        const newAsks = asks ? [...asks] : []
        newAsks[0].replies.unshift({
          ...data?.data.reply,
          user: { _id: user?._id, name: user?.name }
        })
        setAsks(newAsks)
      }
    )
  }

  const handleLike = async (replyID: string) => {
    fetchData(`replies/${replyID}`, 'patch', { userID: user?._id }).then(
      (data) => {
        const newAsks = asks ? [...asks] : []
        const replyIndex = newAsks[0].replies.findIndex(
          (reply) => reply._id === replyID
        )
        newAsks[0].replies[replyIndex] = data?.data.reply
        setAsks(newAsks)
      }
    )
  }

  if (error || errorData) return <Error />
  if (loading) return <Loading />
  return (
    <>
      <Modal onClose={() => setIsModalOpen(!isModalOpen)} isOpen={isModalOpen}>
        <ReplyForm
          onSubmit={handleReplySubmit}
          closeModal={() => setIsModalOpen(!isModalOpen)}
        />
      </Modal>
      {asks && (
        <>
          {/* REQUEST */}
          <div className="w-full mb-6">
            <div className="flex items-center gap-2">
              {/* USED FOR STATIC IMGS UPLOADED WITH MULTER */}
              {/* <img
                src={`${STATIC_BASE_URL}/img/users/user-${asks[0].user._id}.jpeg`}
                onError={(e) =>
                  e.currentTarget.setAttribute('src', '/img/users/default.webp')
                }
                alt="user photo"
                className="rounded-full w-10"
              /> */}
              <Avatar classes="w-10" userPhoto={asks[0].user.photo} />
              <p className="">{asks[0].user.name}</p>
              <span className="font-extralight text-sm">
                {getFormattedDate(asks[0].createdAt)}
              </span>
            </div>
            <div className="p-4 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2 bg-slate-100 dark:bg-slate-800">
              {asks[0].brief}
            </div>
            <div className="flex items-center gap-2 pl-4">
              <GoCommentDiscussion size={20} />
              {`${asks[0].replies.length} ${
                asks[0].replies.length > 1 ? 'Replies' : 'Reply'
              }`}
            </div>
            {user && (
              <div className="w-full flex justify-center">
                <button
                  className={`custom-btn w-full my-10 ${
                    loadingData && 'animate-pulse'
                  }`}
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  disabled={loadingData}
                >
                  Reply
                </button>
              </div>
            )}
          </div>
          {/* REPLIES */}
          <>
            {loadingData && <AskSkeleton height="h-40" />}
            {asks[0].replies.map((reply) => (
              <Reply
                {...reply}
                loggedUserId={user?._id}
                key={reply._id}
                handleLike={handleLike}
              />
            ))}
          </>
        </>
      )}
    </>
  )
}
export default Request
