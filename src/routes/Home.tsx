import React, { useContext } from 'react'
// Context
import { AuthContext } from 'context'
// Components
import { AskForm, Ask, Error, Loading } from 'components'
// Custom hooks / Utils
import { useAsks, useFetch } from 'customHooks'
import { Link } from 'react-router-dom'

const AskLoading = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="w-full my-8">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-10 bg-gray-200 dark:bg-gray-500 h-10"></div>
          <p className="bg-gray-200 dark:bg-gray-500 w-16 h-4"></p>
          <span className="bg-gray-200 dark:bg-gray-500 w-14 h-4"></span>
        </div>
        <div className="bg-gray-200 dark:bg-gray-500 h-20 dialog-box my-2"></div>
        <div className="flex justify-end items-center gap-2">
          <div className="bg-gray-200 dark:bg-gray-500 w-24 h-6"></div>
        </div>
      </div>
    </div>
  )
}

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
          { ...data.request, user: { _id: user?._id, name: user?.name } },
          ...asks
        ])
    )
  }

  if (error || errorData) return <Error />
  if (loading) return <Loading />
  return (
    <>
      {user ? (
        <AskForm makeRequest={makeRequest} userID={user?._id} btnLoading={loadingData}/>
      ) : (
        <Link to="/login" className="custom-btn">
          Login to start asking for recomendations
        </Link>
      )}

      <div className="w-full">
        {loadingData && (
          <>
            <AskLoading />
            {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
          </>
        )}
        {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
      </div>
    </>
  )
}

export default Home
