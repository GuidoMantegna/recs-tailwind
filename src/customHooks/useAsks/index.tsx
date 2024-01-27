import { useState, useEffect } from 'react'
import axios from 'axios'
import { AskProps } from 'interfaces'
import { BASE_URL } from 'utils/constants'

// const URL = 'https://recs-api.vercel.app/api/v1'
// const URL = 'http://localhost:1234/api/v1'

const useAsks = (id: string | undefined) => {
  const [asks, setAsks] = useState<AskProps[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchAsks = async () => {
    setLoading(true)
    try {
      const {
        data: { data }
      } = await axios.get(id ? `${BASE_URL}requests/${id}` : `${BASE_URL}/requests`)
      setAsks(id ? [data.request] : data.requests)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchAsks()
    console.log(BASE_URL)
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
