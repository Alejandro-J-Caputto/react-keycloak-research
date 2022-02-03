import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from './components/Home'

export const RoutesArr = [
  {
    path: '/',
    element: <h1>Hello World</h1>,
  },
  {
    path: '/categories',
    element: <Home />,
  },
]
export const AppRouter = () => {
  const Routes = useRoutes(RoutesArr)
  return Routes
}
