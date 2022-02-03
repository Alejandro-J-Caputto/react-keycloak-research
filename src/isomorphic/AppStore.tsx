import React from 'react'

export type Context = {
  categories: string[]
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}
export const ClientStore = React.createContext({} as Context)

export const useAppStore = () => {
  const context = React.useContext(ClientStore)
  return context
}
