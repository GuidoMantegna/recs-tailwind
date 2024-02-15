import { STATIC_BASE_URL } from '../../utils/constants'
import { useLocation } from 'react-router-dom'
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
  likes,
  loggedUserId,
  handleLike
}) => {
  const { pathname } = useLocation()

  return (
    <div className="w-full py-2" key={_id}>
      {!['/replies', '/favs'].includes(pathname) && (
        <div className="flex items-center gap-2">
          <img
            src={`${STATIC_BASE_URL}/img/users/user-${user._id}.jpeg`}
            onError={(e) =>
              e.currentTarget.setAttribute('src', '/img/users/default.webp')
            }
            alt="user photo"
            className="rounded-full w-10"
          />
          <p className="">{user.name}</p>
          <span className="font-extralight text-sm">
            {getFormattedDate(createdAt)}
          </span>
        </div>
      )}
      <div className="border p-4 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2 dark:border-green-900">
        <p>{reply}</p>
        <iframe
          className="my-2 mx-auto"
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
        <button
          className="flex gap-1"
          onClick={() => handleLike(_id)}
          disabled={['/favs', '/replies'].includes(pathname)}
        >
          {likes.length && likes.some((like) => like._id === loggedUserId) ? (
            <GoHeartFill size={20} />
          ) : (
            <GoHeart size={20} />
          )}
          {numLikes}
        </button>
      </div>
    </div>
  )
}

export default Reply
