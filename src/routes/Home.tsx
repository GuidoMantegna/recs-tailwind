import React, { useContext } from 'react'
import { AuthContext } from 'context'
import AskForm from 'components/AskForm'
import Ask from 'components/Ask'
import useRequests from 'customHooks/useRequests'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Home: React.FC = () => {
  const user = useContext(AuthContext)
  const { asks, loading, error, setAsks } = useRequests(undefined)
  const makeRequest = (ask: string) => {
    try {
      axios
        .post('http://localhost:1234/api/v1/requests', { brief: ask })
        .then((data) => asks && setAsks([...asks, data.data.data.request]))
    } catch (error: Error | any) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <>
      {user ? (
        <AskForm makeRequest={makeRequest} />
      ) : (
        <Link to="/login" className="custom-btn">
          Login to start asking for recomendations
        </Link>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          {asks?.map((ask) => <Ask key={ask._id} {...ask} />)}
        </div>
      )}
    </>
  )
}

export default Home
