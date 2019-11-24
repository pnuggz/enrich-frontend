import { createContext, useContext } from "react"

export const contexts = {
  global: createContext(),
  loginPage: createContext()
}

export const contextsState = (contextName) => {
  return () => useContext(contexts[contextName])
}