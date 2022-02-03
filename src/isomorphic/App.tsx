import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../redux/reducers/index'
import { AppRouter } from './routes'

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
