import React, { useEffect, useState } from 'react'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import { MdEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { User } from 'interfaces'
// Context
import { useContext } from 'react'
import { AuthContext } from 'context'
import { FormField } from 'components'

type LoginFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, form: User) => void
  usedFor: string
}

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, usedFor }) => {
  const user = useContext(AuthContext)
  const [form, setForm] = useState<User>({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
    // photo: ''
  })
  const [showPassword, toggle] = useState(false)
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    email: true,
    photo: true
  })

  useEffect(() => {
    if (usedFor === '/profile' && user) {
      setForm({ ...user })
    }
  }, [])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name !== 'name' ? value.trim() : value })
  }

  const handleDisabled = (field: string) => {
    setIsDisabled({
      ...isDisabled,
      [field]: !isDisabled[field as keyof typeof isDisabled]
    })
  }

  return (
    <form className="w-3/4" onSubmit={(e) => handleSubmit(e, form)}>
      {/* {usedFor !== '/login' && (
        <div id="form-field" className="flex flex-col mb-6">
          <label htmlFor="name">Name 💬</label>
          <span className="relative">
            <input
              name="name"
              onChange={handleFormChange}
              type="text"
              id="name"
              value={form.name}
              className="border-b-2 border-black px-2 py-1"
              disabled={usedFor === '/profile' && isDisabled.name}
            />
            {usedFor === '/profile' && (
              <>
                <button
                  className=" absolute top-2 right-2"
                  onClick={() => handleDisabled('name')}
                  type="button"
                >
                  {isDisabled.name ? <MdEdit /> : <RxCross2 />}
                </button>
              </>
            )}
          </span>
        </div>
      )} */}
      {usedFor !== '/login' && (
        <FormField
          name="name"
          label="Name 💬"
          onChange={handleFormChange}
          type="text"
          value={form.name}
          disabled={usedFor === '/profile' && isDisabled.name}
        >
          {usedFor === '/profile' && (
            <>
              <button
                className=" absolute top-2 right-2"
                onClick={() => handleDisabled('name')}
                type="button"
              >
                {isDisabled.name ? <MdEdit /> : <RxCross2 />}
              </button>
            </>
          )}
        </FormField>
      )}
      <div id="form-field" className="flex flex-col mb-6">
        <label htmlFor="email">Email 📧</label>
        <span className="relative">
          <input
            name="email"
            onChange={handleFormChange}
            type="email"
            id="email"
            value={form.email}
            className="border-b-2 border-black px-2 py-1"
            disabled={usedFor === '/profile' && isDisabled.email}
          />
          {usedFor === '/profile' && (
            <>
              <button
                className=" absolute top-2 right-2"
                onClick={() => handleDisabled('email')}
                type="button"
              >
                {isDisabled.email ? <MdEdit /> : <RxCross2 />}
              </button>
            </>
          )}
        </span>
      </div>
      {usedFor === '/profile' && (
        <div id="form-field" className="flex flex-col mb-6">
          <label htmlFor="photo">Photo 📷</label>
          <input
            name="photo"
            onChange={handleFormChange}
            type="file"
            id="photo"
            // value={form.photo}
            className="border-b-2 border-black px-2 py-1"
            disabled={usedFor === '/profile'}
          />
        </div>
      )}
      {usedFor !== '/profile' && (
        <>
          <div id="form-field" className="flex flex-col mb-6">
            <label htmlFor="password">
              Password {form.password && showPassword && '🙊'}
              {form.password && !showPassword && '🙈'}
              {!form.password && '🐵'}
            </label>
            <span className="relative">
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
        </>
      )}
      <button
        className="custom-btn w-full"
        type="submit"
        // disabled={usedFor === '/profile'}
      >
        {
          { '/login': 'Login', '/singup': 'Sign up', '/profile': 'Update' }[
            usedFor
          ]
        }
      </button>
    </form>
  )
}

export default LoginForm
