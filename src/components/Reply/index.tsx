import axios from 'axios'
import { getFormattedDate } from 'utils'
import { GoHeart, GoHeartFill } from 'react-icons/go'

import { ReplyProps } from 'interfaces'

const Reply: React.FC<ReplyProps> = ({
  _id,
  user,
  videoURL,
  availableOn,
  createdAt,
  reply,
  numLikes,
  isLiked
}) => {
  const handleLike = async (replyID: string) => {
    try {
      await axios.patch(`http://localhost:1234/api/v1/replies/${replyID}`, {
        userID: user?._id
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full" key={_id}>
      <div className="flex items-center gap-2">
        <img
          src="/img/users/user-7.jpg"
          alt="user photo"
          className="rounded-full w-10"
        />
        <p className="">{user.name}</p>
        <span className="font-extralight text-sm">
          {getFormattedDate(createdAt)}
        </span>
      </div>
      <div className="border p-4 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2">
        <p>{reply}</p>
        <iframe
          className=" my-2 mx-auto"
          title="naruto"
          src={videoURL.replace('watch?v=', 'embed/')}
          allowFullScreen
        />
        <p>
          <b>Available on:</b> {availableOn}
        </p>
      </div>
      <div></div>
      <div className="flex justify-end items-center gap-2 text-sm pr-4">
        <button className="flex gap-1" onClick={() => handleLike(_id)}>
          {isLiked ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
          {numLikes}
        </button>
      </div>
    </div>
  )
}

export default Reply
