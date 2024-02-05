// Context
import { useContext } from 'react'
import { AuthContext } from 'context'
// Components
import { Loading, Error, Ask } from 'components'
// Custom hooks / Utils
import { useAsks } from 'customHooks'

const MyRequest: React.FC = () => {
  const user = useContext(AuthContext)
  const { asks, loading, error } = useAsks(user?._id, 'userRequests')

  if (error) return <Error />
  if (loading) return <Loading />
  return (
    <div className="w-full">
      {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
    </div>
  )
}
export default MyRequest
