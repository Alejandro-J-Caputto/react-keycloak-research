import 'regenerator-runtime'

import axios from 'axios'

import { chuckTypes } from '../action-types/index'
import { AppDispatch, RootState } from '../store'

export const fetchCategories = async (dispatch: AppDispatch, getState: RootState) => {
  const response = await axios.get<string[]>(`https://api.chucknorris.io/jokes/categories`)
  console.log(response.data)
  return dispatch({
    type: chuckTypes.fetchCategories,
    payload: response.data,
  })
}
