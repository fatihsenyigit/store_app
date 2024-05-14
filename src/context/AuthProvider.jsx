import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()
// const {Provider} = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
      JSON.parse(sessionStorage.getItem("user")) || null,
    );
    const navigate = useNavigate()

    const login = (info) => {
      setUser(info)
      navigate('/dashboard')
    }

    const logout = () => setUser(null);

      useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(user));
      }, [user]);

  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>

    // <Provider>
    //     {children}
    // </Provider>
  )
}

export default AuthProvider