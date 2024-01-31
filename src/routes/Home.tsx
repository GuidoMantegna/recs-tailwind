import React, { useContext } from 'react'
import { AuthContext } from 'context'
import AskForm from 'components/AskForm'
import Ask from 'components/Ask'
import useAsks from 'customHooks/useAsks'
import { useFetch } from 'customHooks/useFetch'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Error from 'components/Error'
import Loading from 'components/Loading'

const Home: React.FC = () => {
  const user = useContext(AuthContext)
  const { asks, loading, error, setAsks } = useAsks(undefined)
  const { loading: loadingData, error: errorData, fetchData } = useFetch()

  const makeRequest = (ask: string) => {
    fetchData('requests', 'post', { brief: ask }).then(
      (data) => asks && data && setAsks([data.request, ...asks])
    )
  }
  // const makeRequest = (ask: string) => {
  //   hanlders('requests', 'post', { brief: ask })
  //   .then((data) => asks && data && setAsks([data.data.data.request, ...asks]))
  // }

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
