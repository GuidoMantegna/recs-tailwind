import { useState, useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from 'utils/constants'
import { AuthContext } from 'context'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Allow cookies to be received from the server and seted in the browser
axios.defaults.withCredentials = true

export const useFetch = () => {
  const [loadingData, setLoading] = useState(false)
  const [errorData, setError] = useState(false)
  const user = useContext(AuthContext)

  const fetchData = async (url: string, method: string, payload?: any) => {
    setLoading(true)
    try {
      const data = await axios({
        method,
        url: `${BASE_URL}/${url}`,
        headers: { Authorization: `Bearer ${user?.token}` },
        data: payload
      })
      setLoading(false)
      return data.data
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data.message)
      setLoading(false)
      setError(true)
    }
  }
  return {
    loadingData,
    errorData,
    fetchData
  }
}
