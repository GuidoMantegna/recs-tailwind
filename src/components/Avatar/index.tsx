import React, { useContext } from 'react'
import { AuthContext } from 'context'

interface AvatarProps {
  classes?: string
  userPhoto?: string
}

const Avatar: React.FC<AvatarProps> = ({ classes, userPhoto }) => {
  const user = useContext(AuthContext)
  const src = () => {
    if (userPhoto) return userPhoto.split('-')[1]
    if (!userPhoto && user?.photo) return user.photo.split('-')[1]
    return '/img/users/default.webp'
  }

  return (
    <img
      onError={(e) =>
        e.currentTarget.setAttribute('src', '/img/users/default.webp')
      }
      src={src()}
      alt="user avatar"
      className={`rounded-full ${classes}`}
    />
  )
}

export default Avatar
