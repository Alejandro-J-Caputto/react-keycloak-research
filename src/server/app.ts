import 'regenerator-runtime'
import express from 'express'
import { matchRoutes } from 'react-router-dom'

import initialPageRenderer from './renderer'
import { RoutesArr } from '../isomorphic/routes'
import serverStore from './helpers/store-server'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = serverStore()
  const matches = matchRoutes(RoutesArr, req.path)
  const promises = matches?.map(({ route }) => (route.loadData ? route.loadData(store) : null))
  Promise.all(promises as readonly unknown[]).then(() => {
    res.send(initialPageRenderer(req.url, matches, store))
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
