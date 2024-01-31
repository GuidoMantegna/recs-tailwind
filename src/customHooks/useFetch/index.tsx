import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/constants";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useFetch = () => {
  // const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
    // data,
    loading,
    error,
    fetchData
  }
}
// export const hanlders = async (url: string, method: string, data: any) => {
//   try {
//     const response = await axios({
//       method,
//       url: `${BASE_URL}/${url}`,
//       data,
//     });
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }