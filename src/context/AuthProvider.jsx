import React, { createContext, useState } from 'react'

const AuthContext = createContext()
// const {Provider} = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>

    // <Provider>
    //     {children}
    // </Provider>
  )
}

export default AuthProvider