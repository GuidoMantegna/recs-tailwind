import { STATIC_BASE_URL } from '../../utils/constants'
import { AskProps } from 'interfaces'
import { GoCommentDiscussion } from 'react-icons/go'
import { Link } from 'react-router-dom'

const AskLoading = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="w-full my-8">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-10 bg-gray-200 dark:bg-gray-500 h-10"></div>
          <p className="bg-gray-200 dark:bg-gray-500 w-16 h-4"></p>
          <span className="bg-gray-200 dark:bg-gray-500 w-14 h-4"></span>
        </div>
        <div className="bg-gray-200 dark:bg-gray-500 h-20 dialog-box my-2"></div>
        <div className="flex justify-end items-center gap-2">
          <div className="bg-gray-200 dark:bg-gray-500 w-24 h-6"></div>
        </div>
      </div>
    </div>
  )
}

const Ask: React.FC<AskProps> = ({ _id, user, brief, replies, createdAt }) => {
  const date = new Date(createdAt)
  const formattedDate = date
    .toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
    .toLocaleUpperCase()

  if (true)
    return (
      <>
        {/* <AskLoading /> */}
        <div className="w-full my-8">
          <div className="flex items-center gap-2">
            <img
              src={`${STATIC_BASE_URL}/img/users/user-${user._id}.jpeg`}
              alt="user photo"
              className="rounded-full w-10"
            />
            <p className="">{user.name}</p>
            <span className="font-extralight text-sm">{formattedDate}</span>
          </div>
          <div className="border p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2">
            {brief}
          </div>
          <Link
            to={`/requests/${_id}`}
            className="flex justify-end items-center gap-2"
          >
            <GoCommentDiscussion size={20} />
            Replies {`${replies.length}`}
          </Link>
        </div>
      </>
    )
}

export default Ask
