export interface AskProps {
  _id: string
  brief: string
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
  createdAt: string,
  videoURL: string
  likes: [{ _id: string; name: string }]
  user: { _id: string; name: string }
  request: string
  availableOn: string,
  numLikes: number,
  loggedUserId: string | undefined // tells us if the user has liked the reply or not (Not in the API)
  handleLike?: (replyID: string) => void
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
  photo?: any
  role?: string
  password: string
  confirmPassword: string
}