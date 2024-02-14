import { STATIC_BASE_URL } from '../../utils/constants'
import { AskProps } from 'interfaces'
import { GoCommentDiscussion } from 'react-icons/go'
import { Link, useLocation } from 'react-router-dom'

const Ask: React.FC<AskProps> = ({ _id, user, brief, replies, createdAt }) => {
  const date = new Date(createdAt)
  const { pathname } = useLocation()
  const formattedDate = date
    .toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
    .toLocaleUpperCase()

  if (true)
    return (
      <>
        <div className="w-full my-8">
          {pathname !== '/requests' && (
            <div className="flex items-center gap-2">
              <img
                src={`${STATIC_BASE_URL}/img/users/user-${user._id}.jpeg`}
                alt="user photo"
                className="rounded-full w-10"
              />
              <p className="">{user.name}</p>
              <span className="font-extralight text-sm">{formattedDate}</span>
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
      </>
    )
}

export default Ask
