import { AnyAction } from 'redux'

import { chuckTypes } from '../action-types'

// eslint-disable-next-line default-param-last
export const chuckReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    case chuckTypes.fetchCategories:
      return [...state, action.payload]
    default:
      return state
  }
}
