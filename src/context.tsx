import { createContext, useState, useContext } from 'react'

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
  const [user, setUser] = useState<AuthContextProps | null>(null)

  const login = (user: AuthContextProps | null) => {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={user}>
        <Login.Provider value={login}>{children}</Login.Provider>
    </AuthContext.Provider>
  )
}
