import { AskProps } from 'interfaces'
import { GoCommentDiscussion } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Ask: React.FC<AskProps> = ({ _id, user, brief, replies, createdAt }) => {
  const date = new Date(createdAt)
  const formattedDate = date
    .toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
    .toLocaleUpperCase()

  return (
    <div className="w-full my-8">
      <div className="flex items-center gap-2">
        <img
          src="/img/users/user-7.jpg"
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
  )
}

export default Ask
