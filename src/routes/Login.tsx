import React, { useContext, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Context
import { useLogin } from 'context'
// Components
import { LoginForm } from 'components'
// Custom hooks / Utils
import { useFetch } from 'customHooks'
import { LoginForm as LoginFormType } from 'interfaces'

const Login: React.FC = () => {
  const login = useLogin()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { fetchData } = useFetch()

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    form: LoginFormType
  ) => {
    e.preventDefault()
    fetchData(`users${pathname}`, 'post', form).then((data) => {
      login(data.user)
      toast.success('Login successful')
      navigate('/')
    })
  }

  return <LoginForm handleSubmit={handleSubmit} usedFor={pathname} />
}

export default Login
