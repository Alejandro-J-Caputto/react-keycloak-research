import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../../redux/reducers'
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-underscore-dangle

export default function serverStore() {
  const store = createStore(reducers, {}, applyMiddleware(thunk))
  return store
}
