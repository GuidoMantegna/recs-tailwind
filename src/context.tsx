import { createContext, useState, useContext, useEffect } from 'react'

interface AuthContextProps {
  _id: string
  name: string
  email: string
  role: string
}

interface ProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextProps | null>(null)
export const Login = createContext((user: AuthContextProps | null) => {})

export const useLogin = () => useContext(Login)

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthContextProps | null>(() => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  })

  useEffect(() => {
    // Update local storage whenever data changes
    localStorage.setItem('user', JSON.stringify(user))
  })

  const login = (user: AuthContextProps | null) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={user}>
      <Login.Provider value={login}>{children}</Login.Provider>
    </AuthContext.Provider>
  )
}
