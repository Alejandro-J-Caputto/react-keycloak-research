import { AnyAction } from 'redux'

import { chuckTypes } from '../action-types'

const initialState = {
  categories: [],
}
// eslint-disable-next-line default-param-last
export const chuckReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case chuckTypes.fetchCategories:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
