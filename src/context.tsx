import { createContext, useState, useContext, useEffect } from 'react'
import { User } from 'interfaces'

interface ProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<User | null>(null)
export const Login = createContext((user: User | null) => {})

export const useLogin = () => useContext(Login)

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  })

  useEffect(() => {
    // Update local storage whenever data changes
    localStorage.setItem('user', JSON.stringify(user))
  })

  const login = (user: User | null) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={user}>
      <Login.Provider value={login}>{children}</Login.Provider>
    </AuthContext.Provider>
  )
}
