import React, { useState } from 'react'

interface AskFormProps {
  makeRequest: (ask: string) => void
}

const AskForm: React.FC<AskFormProps> = ({ makeRequest }) => {
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
    <form onSubmit={handleSubmit} className="w-full">
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="" className="flex items-center justify-center gap-4">
          <img
            src="/img/users/user-7.jpg"
            alt="user photo"
            className="rounded-full w-12 mb-2"
          />
          <h3 className=" text-lg">What mood are you in?</h3>
        </label>
        <textarea
          name="name"
          onChange={handleFormChange}
          placeholder="I feel bored, I want to watch something funny..."
          id="name"
          className="border-b-2 border-black px-2 py-2"
        />
      </div>
      <button className="custom-btn w-full">Ask</button>
    </form>
  )
}

export default AskForm
