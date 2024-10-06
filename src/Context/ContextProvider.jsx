import React, { useState } from 'react'
import UsernameContext from './UsernameContext'

function ContextProvider({children}) {

    const [username, setUsername] = useState('');

  return (
    <UsernameContext.Provider value={{username, setUsername}}>
        {children}
    </UsernameContext.Provider>
  )
}

export default ContextProvider