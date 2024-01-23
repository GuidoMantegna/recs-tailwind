import React from 'react'
import ReactDOM from 'react-dom'
import { MdOutlineClose } from 'react-icons/md'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="flex justify-center items-center fixed w-full bg-neutral-700 bg-opacity-90 top-0 bottom-0">
      <div className="bg-white p-10 relative rounded-sm">
        <button onClick={onClose} className="absolute top-2 right-2">
          <MdOutlineClose />
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
