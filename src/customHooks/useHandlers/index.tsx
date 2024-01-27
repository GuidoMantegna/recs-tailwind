import axios from "axios";
import { AskProps } from "interfaces";
import { useParams } from "react-router-dom";

// const params = useParams();
// console.log(params)
const URL = "http://localhost:1234/api/v1";

export const hanlders = async (url: string, method: string, data: any) => {
  try {
    const response = await axios({
      method,
      url: `${URL}/${url}`,
      data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}