import React, { useState } from 'react'
import { Avatar } from 'components'

interface AskFormProps {
  makeRequest: (ask: string) => void
  // userID: string | undefined
  btnLoading?: boolean
}

export const AskForm: React.FC<AskFormProps> = ({
  makeRequest,
  // userID,
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
          <Avatar classes="w-12 mb-2" />
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
