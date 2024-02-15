import React, { useState } from 'react'
import { STATIC_BASE_URL } from 'utils/constants'

interface AskFormProps {
  makeRequest: (ask: string) => void
  userID: string | undefined
  btnLoading?: boolean
}

const AskForm: React.FC<AskFormProps> = ({
  makeRequest,
  userID,
  btnLoading
}) => {
  const [ask, setAsk] = useState('')
  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAsk(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    makeRequest(ask)
    setAsk('')
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mb-20">
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="" className="flex items-center justify-center gap-4">
          <img
            src={`${STATIC_BASE_URL}/img/users/user-${userID}.jpeg`}
            onError={(e) => e.currentTarget.setAttribute('src', '/img/users/default.webp')}
            alt="user photo"
            className="rounded-full w-12 mb-2"
          />
          <h3 className=" text-lg">What mood are you in?</h3>
        </label>
        <textarea
          name="name"
          onChange={handleFormChange}
          value={ask}
          placeholder="I feel bored, I want to watch something funny..."
          id="name"
          maxLength={140}
          className="border-b-2 border-black px-2 py-2"
        />
      </div>
      <button
        className={`custom-btn btn-loading w-full dark:disabled:bg-slate-700 ${
          btnLoading && 'animate-pulse'
        }`}
        disabled={btnLoading || !ask}
      >
        Ask
      </button>
    </form>
  )
}

export default AskForm
