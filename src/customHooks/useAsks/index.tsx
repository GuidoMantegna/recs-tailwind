import { useState, useEffect } from 'react'
import axios from 'axios'
import { AskProps } from 'interfaces'
import { BASE_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const useAsks = (id: string | undefined) => {
  const [asks, setAsks] = useState<AskProps[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchAsks = async () => {
    setLoading(true)
    try {
      const {
        data: { data }
      } = await axios.get(
        id ? `${BASE_URL}/requests/${id}` : `${BASE_URL}/requests`
      )
      setAsks(id ? [data.request] : data.requests)
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
