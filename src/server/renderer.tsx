/* eslint-disable consistent-return */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchRoutes, renderMatches } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'

import { RoutesArr } from '../isomorphic/routes'

const ServerStoreCtx = React.createContext({})
const RouterCtx = React.createContext({
  context: {},
})

export default function Page(path: string) {
  const appStore = { patata: 'patata' }
  const matches = matchRoutes(RoutesArr, path)
  const page = renderToString(
    <ServerStoreCtx.Provider value={appStore}>
      <RouterCtx.Provider value={{ context: {} }}>
        {matches?.map(({ route }) => (route.loadData ? route.loadData(appStore) : null))}
        <StaticRouter location={path}>{renderMatches(matches)}</StaticRouter>
      </RouterCtx.Provider>
    </ServerStoreCtx.Provider>
  )

  return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          </head>
          <body>
          <div id="root">${page}</div>
          <script type="module" src='bundle.js'></script>
        </body>
    </html>`
}
