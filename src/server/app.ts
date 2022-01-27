import express from 'express'
import { Page } from './renderer'
const app = express()
app.get('/', (req, res) => {
  res.send(Page)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
