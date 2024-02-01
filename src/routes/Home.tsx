import React, { useContext } from 'react'
// Context
import { AuthContext } from 'context'
// Components
import { AskForm, Ask, Error, Loading } from 'components'
// Custom hooks / Utils
import { useAsks, useFetch } from 'customHooks'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const user = useContext(AuthContext)
  const { asks, loading, error, setAsks } = useAsks(undefined)
  const { loadingData, errorData, fetchData } = useFetch()

  const makeRequest = (ask: string) => {
    fetchData('requests', 'post', { brief: ask }).then(
      (data) => asks && data && setAsks([data.request, ...asks])
    )
  }

  if (error || errorData) return <Error />
  if (loading || loadingData) return <Loading />
  return (
    <>
      {user ? (
        <AskForm makeRequest={makeRequest} />
      ) : (
        <Link to="/login" className="custom-btn">
          Login to start asking for recomendations
        </Link>
      )}

      <div className="w-full">
        {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
      </div>
    </>
  )
}

export default Home
