import React, { useContext } from 'react'
// Context
import { AuthContext } from 'context'
// Components
import { AskForm, Ask, Error, Loading, AskSkeleton } from 'components'
// Custom hooks / Utils
import { useAsks, useFetch } from 'customHooks'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const user = useContext(AuthContext)
  const { asks, loading, error, setAsks } = useAsks(undefined, 'allRequests')
  const { loadingData, errorData, fetchData } = useFetch()

  const makeRequest = (ask: string) => {
    fetchData('requests', 'post', { brief: ask }).then(
      (data) =>
        asks &&
        data &&
        // set asks with current user data beacuse the user is not fetched from the server completely
        setAsks([
          { ...data.data.request, user: { _id: user?._id, name: user?.name } },
          ...asks
        ])
    )
  }

  if (error || errorData) return <Error />
  if (loading) return <Loading />
  return (
    <>
      {user ? (
        <AskForm
          makeRequest={makeRequest}
          btnLoading={loadingData}
        />
      ) : (
        <div className="w-full">
          <Link to="/login" className="custom-btn block text-center">
            Login to start asking for recomendations
          </Link>
        </div>
      )}

      <div className="w-full">
        {loadingData && <AskSkeleton height="h-20" />}
        {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
      </div>
    </>
  )
}

export default Home
