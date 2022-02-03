import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ClientStore } from './AppStore'
import { AppRouter } from './routes'

export default function App() {
  const [categories, setCategories] = React.useState<string[]>([])
  return (
    <ClientStore.Provider value={{ categories, setCategories }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ClientStore.Provider>
  )
}
