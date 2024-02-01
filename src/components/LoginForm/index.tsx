import React, { useState } from 'react'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import { LoginForm } from 'interfaces'

type LoginFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, form: LoginForm) => void
  usedFor?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, usedFor }) => {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  const [showPassword, toggle] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name !== 'name' ? value.trim() : value })
  }

  return (
    <form className="w-3/4" onSubmit={(e) => handleSubmit(e, form)}>
      {usedFor === '/signup' && (
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
      )}
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
            type="button"
          >
            {showPassword ? <BiShowAlt /> : <BiHide />}
          </button>
        </span>
      </div>
      {usedFor === '/signup' && (
        <div id="form-field" className="flex flex-col mb-6">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            name="confirmPassword"
            onChange={handleFormChange}
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={form.confirmPassword}
            className="border-b-2 border-black px-2 py-1 w-full"
          />
        </div>
      )}
      <button className="custom-btn w-full" type="submit">
        {usedFor === '/login' ? 'Login' : 'Sign up'}
      </button>
    </form>
  )
}

export default LoginForm
