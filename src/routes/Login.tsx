import React, { useState } from 'react'
import axios from 'axios'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import { useTest } from 'context'

type Form = {
  email: string
  password: string
  name: string
  consfirmPassword: string
}

const Login: React.FC = () => {
  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
    name: '',
    consfirmPassword: ''
  })
  const [showPassword, toggle] = useState(false)
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name !== 'name' ? value.trim() : value })
  }

  const login = useTest()

  const loginRequest = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:1234/api/v1/users/login',
        form
      )
      console.log(data)
      login(data.data.user)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginRequest()

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
          value={form.name}
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
          value={form.email}
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
            value={form.password}
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
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          name="confirmPassword"
          onChange={handleFormChange}
          type={showPassword ? 'text' : 'password'}
          id="confirmPassword"
          value={form.consfirmPassword}
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
