import React, { useEffect, useState } from 'react'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import { MdEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { User } from 'interfaces'
// Context
import { useContext } from 'react'
import { AuthContext } from 'context'
// Components
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
    confirmPassword: '',
    photo: null
  })
  const [showPassword, toggle] = useState(false)
  const [isDisabled, setIsDisabled] = useState({
    name: true,
    email: true,
    photo: true
  })

  useEffect(() => {
    if (usedFor === '/profile' && user) {
      setForm({ ...user, photo: null })
    }
  }, [])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    const finalValue = () => {
      if (name === 'name') return value
      if (name === 'photo') return files ? files[0] : null
      return value.trim()
    }
    setForm({ ...form, [name]: finalValue() })
  }

  const handleDisabled = (field: string) => {
    setIsDisabled({
      ...isDisabled,
      [field]: !isDisabled[field as keyof typeof isDisabled]
    })
  }

  const passwordIcon = () => {
    if (form.password && showPassword) return '🙊'
    if (form.password && !showPassword) return '🙈'
    if (!form.password) return '🐵'
  }

  return (
    <form className="w-3/4" encType="multipart/form-data" onSubmit={(e) => handleSubmit(e, form)}>
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
      <FormField
        name="email"
        label="Email 📧"
        onChange={handleFormChange}
        type="email"
        value={form.email}
        disabled={usedFor === '/profile' && isDisabled.email}
      >
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
      </FormField>
      {usedFor === '/profile' && (
        <FormField
          name="photo"
          label="Photo 📷"
          onChange={handleFormChange}
          type="file"
          // value=''//{form.photo}
          // disabled={usedFor === '/profile'}
        />
      )}
      {usedFor !== '/profile' && (
        <>
          <FormField
            name="password"
            label={`Password ${passwordIcon()}`}
            onChange={handleFormChange}
            type={showPassword ? 'text' : 'password'}
            value={form.password}
          >
            <button
              className=" absolute top-2 right-2"
              onClick={() => toggle(!showPassword)}
              type="button"
            >
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </button>
          </FormField>
          {usedFor === '/signup' && (
            <FormField
              name="confirmPassword"
              label="Confirm password"
              onChange={handleFormChange}
              type={showPassword ? 'text' : 'password'}
              value={form.confirmPassword}
            />
          )}
        </>
      )}
      <button
        className="custom-btn w-full"
        type="submit"
        // disabled={usedFor === '/profile'}
      >
        {
          { '/login': 'Login', '/signup': 'Sign up', '/profile': 'Update' }[
            usedFor
          ]
        }
      </button>
    </form>
  )
}

export default LoginForm
