import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import Home from './components/Home'

export const AppRouter = () => {
  const Routes = useRoutes([
    {
      path: '/',
      element: <h1>Hello World</h1>,
    },
    {
      path: '/categories',
      element: <Home />,
    },
  ])
  return Routes
}
