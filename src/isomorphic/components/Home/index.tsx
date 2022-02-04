import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCategories } from '../../../redux/actions/chuck.actions'
import { RootState } from '../../../redux/store'

export default function Home() {
  const { categories } = useSelector((store: RootState) => store.chuck)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchCategories)
  }, [])
  return (
    <div>
      <button
        onClick={() => {
          console.log('onClick')
        }}
      >
        PRESS ME
      </button>
      <h1>Hello World</h1>
      <ul>
        {categories.map((categorie: string) => (
          <li key={categorie}>{categorie}</li>
        ))}
      </ul>
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function loadData(appStore: any) {
  console.log('Loading data...')
  return appStore.dispatch(fetchCategories)
}
