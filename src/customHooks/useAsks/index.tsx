import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { AskProps } from 'interfaces'
import { BASE_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useAsks = (id: string | undefined, usedFor: string) => {
  const [asks, setAsks] = useState<AskProps[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const URL = {
    allRequests: `${BASE_URL}/requests`,
    userRequests: `${BASE_URL}/requests?user=${id}`,
    replies: `${BASE_URL}/requests/${id}`
  }[usedFor] ?? `${BASE_URL}/requests`
  const fetchAsks = async () => {
    setLoading(true)
    try {
      const {
        data: { data }
      } = await axios.get(URL)
      setAsks(usedFor === 'replies' ? [data.request] : data.requests)
      setLoading(false)
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message)
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    fetchAsks()
    return () => {}
  }, [])

  return {
    asks,
    loading,
    error,
    setAsks
  }
}

export default useAsks
