import { Link, useLocation } from 'react-router-dom'
import { AskProps } from 'interfaces'
import { getFormattedDate } from 'utils'
import { GoCommentDiscussion } from 'react-icons/go'
import { Avatar } from 'components'

export const Ask: React.FC<AskProps> = ({
  _id,
  user,
  brief,
  replies,
  createdAt
}) => {
  const { pathname } = useLocation()

  return (
    <div className="w-full my-8">
      {pathname !== '/requests' && (
        <div className="flex items-center gap-2">
          {/* USED FOR STATIC IMGS UPLOADED WITH MULTER */}
          {/* <img
            src={`${STATIC_BASE_URL}/img/users/user-${user._id}.jpeg`}
            onError={(e) =>
              e.currentTarget.setAttribute('src', '/img/users/default.webp')
            }
            alt="user photo"
            className="rounded-full w-10"
          /> */}
          <Avatar classes="w-10" userPhoto={user.photo} />
          <p className="">{user.name}</p>
          <span className="font-extralight text-sm">
            {getFormattedDate(createdAt)}
          </span>
        </div>
      )}
      <div className="border dark:border-green-900 p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2">
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
