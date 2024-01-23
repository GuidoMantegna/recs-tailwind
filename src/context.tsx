import { createContext, useState, useContext } from 'react'
import { AskProps } from 'interfaces'

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
export const AsksContext = createContext((asks: AskProps | null) => {})

export const useLogin = () => useContext(Login)
export const useAsks = () => useContext(AsksContext)

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthContextProps | null>(null)
  const [asks, setAsks] = useState<AskProps | null>(null)

  const login = (user: AuthContextProps | null) => {
    setUser(user)
  }
  const setAsk = (asks: AskProps | null) => {
    setAsks(asks)
  }

  return (
    <AuthContext.Provider value={user}>
        <Login.Provider value={login}>
          <AsksContext.Provider value={setAsk}>
            {children}
          </AsksContext.Provider>
        </Login.Provider>
    </AuthContext.Provider>
  )
}
