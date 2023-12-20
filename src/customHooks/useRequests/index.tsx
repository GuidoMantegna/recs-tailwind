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
      user: string
      request: string
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
  
}

// const URL = 'https://recs-api.vercel.app/api/v1'
const URL = 'http://localhost:1234/api/v1'

const useCategories = () => {
  const [asks, setAsks] = useState<AskProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchAsks = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `${URL}/requests`, 
        )
        setAsks(data.data.requests)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchAsks()
  }, [])

  return {
    asks,
    loading,
    error,
  }
}

export default useCategories