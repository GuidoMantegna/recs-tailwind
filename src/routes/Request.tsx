import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReplyForm from 'components/ReplyForm'
import Modal from 'components/Modal'
import useAsks from '../customHooks/useAsks'
import { GoCommentDiscussion } from 'react-icons/go'
import { getFormattedDate } from 'utils'
import { useContext } from 'react'
import { AuthContext } from 'context'
import Reply from 'components/Reply'
import { ReplyFormState } from 'interfaces'
import { useFetch } from 'customHooks/useFetch'
import Loading from 'components/Loading'
import Error from 'components/Error'

const Request: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { asks, loading, error, setAsks } = useAsks(id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const user = useContext(AuthContext)
  const { loading: loadingData, error: errorData, fetchData } = useFetch()

  const handleReplySubmit = async (form: ReplyFormState) => {
    fetchData(`requests/${asks?.[0]._id}/replies`, 'post', form).then((data) => {
      const newAsks = asks ? [...asks] : []
      newAsks[0].replies.push(data?.data.data.reply)
      setAsks(newAsks)
      setIsModalOpen(!isModalOpen)
    })
  }

  const handleLike = async (replyID: string) => {
    fetchData(`replies/${replyID}`, 'patch', { userID: user?._id }).then(
      (data) => {
        const newAsks = asks ? [...asks] : []
        const replyIndex = newAsks[0].replies.findIndex(
          (reply) => reply._id === replyID
        )
        newAsks[0].replies[replyIndex] = data?.data.data.reply
        setAsks(newAsks)
      }
    )
  }
  // const handleReplySubmit = async (form: ReplyFormState) => {
  //   hanlders(`requests/${asks?.[0]._id}/replies`, 'post', form).then((data) => {
  //     const newAsks = asks ? [...asks] : []
  //     newAsks[0].replies.push(data?.data.data.reply)
  //     setAsks(newAsks)
  //     setIsModalOpen(!isModalOpen)
  //   })
  // }

  // const handleLike = async (replyID: string) => {
  //   hanlders(`replies/${replyID}`, 'patch', { userID: user?._id }).then(
  //     (data) => {
  //       const newAsks = asks ? [...asks] : []
  //       const replyIndex = newAsks[0].replies.findIndex(
  //         (reply) => reply._id === replyID
  //       )
  //       newAsks[0].replies[replyIndex] = data?.data.data.reply
  //       setAsks(newAsks)
  //     }
  //   )
  // }

  if (error || errorData) return <Error />
  if (loading || loadingData) return <Loading />
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
            <Reply
              {...reply}
              loggedUserId={user?._id}
              key={reply._id}
              handleLike={handleLike}
            />
          ))}
        </>
      )}
    </>
  )
}
export default Request
