import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { ReplyProps } from 'interfaces'
import { BASE_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useReplies = (userId: string | undefined, usedFor: string) => {
  const [replies, setReplies] = useState<ReplyProps[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { pathname } = useLocation()

  const fetchReplies = async () => {
    setLoading(true)
    try {
      const {
        data: { data }
      } = await axios.get(`${BASE_URL}/replies?user=${usedFor === "/replies" ? userId : ''}&likedBy=${usedFor === "/favs" ? userId : ''}`)
      setReplies(data.replies)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message)
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    fetchReplies()
    return () => {}
  }, [pathname])

  return {
    replies,
    loading,
    error,
    setReplies
  }
}

export default useReplies
