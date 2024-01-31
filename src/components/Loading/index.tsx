import React from 'react'
import ReactDOM from 'react-dom'

const Loading: React.FC = () => {
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center fixed w-full bg-neutral-700 bg-opacity-90 top-0 bottom-0">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>,
    document.body
  )
}

export default Loading
