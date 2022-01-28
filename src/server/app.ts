import express from 'express'

import page from './renderer'

const app = express()
app.get('/', (req, res) => {
  res.send(page)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
