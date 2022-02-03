import { combineReducers } from 'redux'

import { chuckReducer } from './chuckReducer'

const reducers = combineReducers({
  chuck: chuckReducer,
})

export default reducers
