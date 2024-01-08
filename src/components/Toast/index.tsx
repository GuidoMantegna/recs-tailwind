import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastProps {
  msg: string
  type: string // "success" | "error" | "info" | "warning"
}

const Toast: React.FC<ToastProps> = ({msg, type}) => { // Assign a default value of "success" to 'type'
  const notify = () => toast[type = "success"](msg)
  return (
    <ToastContainer />
  )
}

export default Toast