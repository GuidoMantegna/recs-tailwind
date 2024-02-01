export interface AskProps {
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
      user: { _id: string; name: string }
      request: string
      likes: [{ _id: string; name: string }]
      numLikes: number
      availableOn: string
      createdAt: string
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

export type ReplyProps = {
  _id: string
  reply: string
  videoURL: string
  user: { _id: string; name: string }
  request: string
  likes: [{ _id: string; name: string }]
  numLikes: number,
  availableOn: string,
  createdAt: string,
  loggedUserId: string | undefined // tells us if the user has liked the reply or not (Not in the API)
  handleLike: (replyID: string) => void
}

export type ReplyFormState = {
  reply: string
  videoURL: string
  availableOn: string
}

export type User = {
  _id?: string
  name: string
  email: string
  photo?: string
  role?: string
  password: string
  confirmPassword: string
}