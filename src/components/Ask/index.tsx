import { GoCommentDiscussion, GoQuestion } from 'react-icons/go'
import { Link } from 'react-router-dom'

interface AskProps {
  _id: string
  brief: string
  // an object with the user data
  user: {
    _id: string
    name: string
  }
  replies: [
    {
      _id: string
      reply: string
      videoURL: string
      user:{ _id: string; name: string }
      request: string
    }
  ]
  // an array of objects with the reply data
  likes: [
    {
      _id: string
      name: string
    }
  ]
  numLikes: number
  createdAt: string
}

const Ask: React.FC<AskProps> = ({ _id, user, brief, replies, createdAt }) => {
  const date = new Date(createdAt)
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  }).toLocaleUpperCase()

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
      <Link to={`/requests/${_id}`} className="flex justify-end items-center gap-2">
        {/* <button> */}
          <GoCommentDiscussion size={20} />
          Replies {`${replies.length}`}
        {/* </button> */}
        {/* <p className="text-sm">Replies {`${replies.length}`}</p> */}
      </Link>
    </div>
  )
}

export default Ask
