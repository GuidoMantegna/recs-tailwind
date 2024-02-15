import { User, AskProps } from 'interfaces'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getFormattedDate(date: string): string {
  const newDate = new Date(date)

  return newDate
    .toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
    .toLocaleUpperCase()
}

export const handleLike = async (
  replyID: string,
  fetchData: (url: string, method: string, body: object) => Promise<any>,
  user: User | null,
  asks: AskProps[] | null,
  setAsks: (asks: AskProps[] | null) => void
) => {
  fetchData(`replies/${replyID}`, 'patch', { userID: user?._id }).then(
    (data) => {
      const newAsks = asks ? [...asks] : []
      const replyIndex = newAsks[0].replies.findIndex(
        (reply) => reply._id === replyID
      )
      newAsks[0].replies[replyIndex] = data?.reply
      setAsks(newAsks)
    }
  )
}
