import React, { useState, useContext } from "react"
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [showClose, setShowClose] = useState(true)
  const [switchState, setSwitchState] = useState(false)
  return (
    <AppContext.Provider
      value={{
        showClose,
        setShowClose,
        switchState,
        setSwitchState
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
