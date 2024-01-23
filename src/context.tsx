import { createContext, useState, useContext, useEffect } from 'react'
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
  // const [user, setUser] = useState<AuthContextProps | null>(null)
  const [user, setUser] = useState<AuthContextProps | null>(() => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  })
  const [asks, setAsks] = useState<AskProps | null>(null)

  useEffect(() => {
    // Update local storage whenever data changes
    localStorage.setItem('user', JSON.stringify(user))
  })

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
