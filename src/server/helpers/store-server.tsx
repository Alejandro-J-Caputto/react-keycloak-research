import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../../redux/reducers'

export default function serverStore() {
  const store = createStore(reducers, {}, applyMiddleware(thunk))
  return store
}
