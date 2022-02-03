import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home, { loadData } from './components/Home'

export const RoutesArr = [
  {
    path: '/',
    element: <h1>Hello World</h1>,
  },
  {
    path: '/categories',
    element: <Home />,
    loadData,
  },
]
export const AppRouter = () => {
  const Routes = useRoutes(RoutesArr)
  return Routes
}
