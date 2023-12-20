import { GoCommentDiscussion, GoQuestion } from 'react-icons/go'

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
      user: string
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
  
}

const Ask: React.FC<AskProps> = ({user, brief, replies}) => {
  return (
    <div className="w-full my-8">
      <div className="flex items-center gap-2">
        <img
          src="/img/users/user-7.jpg"
          alt="user photo"
          className="rounded-full w-10"
        />
        <p className="">{user.name}</p>
        <span className="font-extralight text-sm">JUN 2020</span>
      </div>
      <div className="border p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2" >
          {brief}
      </div>
      <div className='flex justify-end items-center gap-2'>
        <button>
        <GoCommentDiscussion size={20} />
        </button>
          <p className="text-sm">Replies {`${replies.length}`}</p>
      </div>
    </div>
  )
}

export default Ask
