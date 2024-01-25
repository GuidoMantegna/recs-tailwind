import React, { useState } from 'react'

interface ReplyFormProps {
  onSubmit: (form: ReplyFormState) => void
  closeModal: () => void
}

type ReplyFormState = {
  rec: string
  videoURL: string
  availableOn: string
}

const ReplyForm: React.FC<ReplyFormProps> = ({ onSubmit, closeModal }) => {
  const [reply, setReply] = useState<ReplyFormState>({
    rec: '',
    videoURL: '',
    availableOn: ''
  })
  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target

    setReply({ ...reply, [name]: value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(reply)
    // setReply('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <textarea
        name="rec"
        value={reply.rec}
        className="border-b-2 border-black px-2 py-1"
        onChange={handleFormChange}
        placeholder="You should see..."
      />
      <input
        name="videoURL"
        value={reply.videoURL}
        className="border-b-2 border-black px-2 py-1"
        onChange={handleFormChange}
        placeholder="YouTube Link"
      />
      <input
        name="availableOn"
        value={reply.availableOn}
        className="border-b-2 border-black px-2 py-1"
        onChange={handleFormChange}
        placeholder="Available on..."
      />
      <div className="flex flex-col gap-1 mt-4">
        <button type="submit" className="custom-btn mt-4 grow">
          Reply
        </button>
        <button
          type="button"
          className="custom-btn mt-4 grow bg-slate-200"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ReplyForm
