import React, { useContext } from 'react'
import { AuthContext } from 'context'
import AskForm from 'components/AskForm'
import Ask from 'components/Ask'
import useRequests from 'customHooks/useRequests'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const user = useContext(AuthContext)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const { asks, loading, error } = useRequests(undefined)
  return (
    <>
      {user ? (
        <AskForm />
      ) : (
        <Link to="/login" className="custom-btn">
          Login to start asking for recomendations
        </Link>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          {/* {asks[0].replies.map((ask) => (
            <div className="w-full my-8">
            <div className="flex items-center gap-2">
              <img
                src="/img/users/user-7.jpg"
                alt="user photo"
                className="rounded-full w-10"
              />
              <p className="">USER</p>
              {/* <span className="font-extralight text-sm">{formattedDate}</span> 
            </div>
            <div className="border p-2 h-20 overflow-hidden whitespace-nowrap text-ellipsis dialog-box my-2">
              {ask.reply}
            </div>
            <div className="flex justify-end items-center gap-2">
            </div>
          </div>
          ))} */}
          {asks?.map((ask) => (
            <Ask key={ask._id} {...ask} />
          ))}
        </div>
      )}
      {/* <Ask />
      <Ask /> */}
    </>
  )
}

export default Home
