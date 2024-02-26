import React, { useContext } from 'react'
import { AuthContext } from 'context'

interface AvatarProps {
  classes?: string
  userPhoto?: string
}

const Avatar: React.FC<AvatarProps> = ({ classes, userPhoto }) => {
  const user = useContext(AuthContext)
  return (
    <img
      onError={(e) =>
        e.currentTarget.setAttribute('src', '/img/users/default.webp')
      }
      src={userPhoto ? userPhoto.split('-')[1] : user?.photo.split('-')[1]}
      alt="user avatar"
      className={`rounded-full ${classes}`}
    />
  )
}

export default Avatar
