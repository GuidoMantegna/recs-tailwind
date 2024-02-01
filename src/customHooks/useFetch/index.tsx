import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/constants";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Allow cookies to be received from the server and seted in the browser
axios.defaults.withCredentials = true

const useFetch = () => {
  const [loadingData, setLoading] = useState(false)
  const [errorData, setError] = useState(false)

  const fetchData = async (url: string, method: string, payload: any) => {
    setLoading(true)
    try {
      const data = await axios({
        method,
        url: `${BASE_URL}/${url}`,
        data: payload,
      });
      setLoading(false)
      return data.data.data
    } catch (error: any) {
      console.log(error);
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

export default useFetch