import axios from 'axios'
import React from 'react'

export default function Home() {
  const [categories, setCategories] = React.useState<string[]>([])
  // React.useEffect(() => {
  //   setCategories(context.categories)
  // }, [])
  return (
    <>
      <h1>Hello World</h1>
      {categories.map((categorie) => (
        <div key={categorie}>{categorie}</div>
      ))}
      <button
        onClick={() => {
          console.log('onClick')
        }}
      >
        PRESS ME
      </button>
    </>
  )
}
export function loadData(appStore: { appStore: Record<string, unknown> }) {
  console.log(appStore)
  console.log('Loading data...')
}
