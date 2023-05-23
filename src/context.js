import React, { useState, useContext, useEffect } from "react"
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [showClose, setShowClose] = useState(true)
  const [switchState, setSwitchState] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })

  return (
    <AppContext.Provider
      value={{
        showClose,
        setShowClose,
        switchState,
        setSwitchState,
        windowWidth
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
