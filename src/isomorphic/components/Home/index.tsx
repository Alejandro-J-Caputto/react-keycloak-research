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
      <div>Hello World</div>
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
