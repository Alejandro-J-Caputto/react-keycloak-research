/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { chuckReducer } from './reducers/chuckReducer'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({ chuck: chuckReducer })
export const store = createStore(
  reducers,
  (window as any).INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
