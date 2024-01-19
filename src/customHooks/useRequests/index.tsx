import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface AskProps {
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

// const URL = 'https://recs-api.vercel.app/api/v1'
const URL = 'http://localhost:1234/api/v1'

// const useRequests = (id: string | undefined) => {
//   const [asks, setAsks] = useState<AskProps[]>([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     setLoading(true)
//     axios
//       .get(id ? `${URL}/requests/${id}` : `${URL}/requests`)
//       .then((data) => {
//         setLoading(false)
//         setAsks(id ? [data.data.data.request] : data.data.data.requests)
//       })
//       .catch((error: any) => {
//         setError(true)
//         setLoading(false)
//       })
//   }, [])
//   return {
//     asks,
//     loading,
//     error
//   }
// }
const useRequests = (id: string | undefined) => {
  const [asks, setAsks] = useState<AskProps[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchAsks = async () => {
    try {
      // setLoading(true)
      const {
        data: { data }
      } = await axios.get(id ? `${URL}/requests/${id}` : `${URL}/requests`)
      setAsks(id ? [data.request] : data.requests)
      // setLoading(false)
    } catch (error) {
      setError(true)
      // setLoading(false)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchAsks()
    // return async() => fetchAsks()
    return () => {}
  }, [])

  return {
    asks,
    loading,
    error
  }
}

export default useRequests
