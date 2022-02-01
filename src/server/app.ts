import 'regenerator-runtime'
import express from 'express'

import initialPageRenderer from './renderer'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(initialPageRenderer(req.path))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
