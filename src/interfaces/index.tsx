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
  numLikes: number
}