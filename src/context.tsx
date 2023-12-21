import { createContext, useState, useContext } from "react";

interface AuthContextProps {
  _id: string
  name: string
  email: string
  role: string
}

interface ProviderProps {
  children: React.ReactNode
}


export const AuthContext = createContext<AuthContextProps | null>(null);
export const Logged = createContext<boolean>(false);
export const Test = createContext((user: AuthContextProps) => {});

export const useTest = () => useContext(Test)

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthContextProps | null>({_id: '', name: 'Susi', email: '', role: ''})
  const [logged, toggle] = useState<boolean>(false)

  const login = (user: AuthContextProps) => {
    setUser(user)
    toggle(true)
  }

  return (
    <AuthContext.Provider value={user}>
      <Logged.Provider value={logged}>
        <Test.Provider value={login}>
          {children}
        </Test.Provider>
      </Logged.Provider>
    </AuthContext.Provider>
  )
}