import axios from 'axios'
import React from 'react'

export default function Home() {
  const [categories, setCategories] = React.useState<string[]>([])
  React.useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get<string[]>(`https://api.chucknorris.io/jokes/categories`)
      setCategories(response.data)
    }
    fetchCategories()
  }, [])
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
