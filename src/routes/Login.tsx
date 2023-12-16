import React, { useState } from 'react'
import { BiShowAlt, BiHide } from 'react-icons/bi'

type Form = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, toggle] = useState(false)
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name !== 'name' ? value.trim() : value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className="w-3/4" onSubmit={handleSubmit}>
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="name">Name 💬</label>
        <input
          name="name"
          onChange={handleFormChange}
          type="text"
          id="name"
          className="border-b-2 border-black px-2 py-1"
        />
      </div>
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="email">Email 📧</label>
        <input
          name="email"
          onChange={handleFormChange}
          type="email"
          id="email"
          className="border-b-2 border-black px-2 py-1"
        />
      </div>
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="password">
          Password {form.password && showPassword && '🙊'}
          {form.password && !showPassword && '🙈'}
          {!form.password && '🐵'}
        </label>
        <span className=" relative">
          <input
            name="password"
            onChange={handleFormChange}
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="border-b-2 border-black px-2 py-1 w-full"
          />
          <button
            className=" absolute top-2 right-2"
            onClick={() => toggle(!showPassword)}
          >
            {showPassword ? <BiShowAlt /> : <BiHide />}
          </button>
        </span>
      </div>
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="confirmPassword">
          Confirm password
        </label>
          <input
            name="confirmPassword"
            onChange={handleFormChange}
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            className="border-b-2 border-black px-2 py-1 w-full"
          />
      </div>
      <button className="custom-btn w-full" type="submit">
        Login
      </button>
    </form>
  )
}

export default Login
