import React, { useContext } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import { AppRouter } from '../isomorphic/routes'

const ServerStoreCtx = React.createContext({})
const RouterCtx = React.createContext({
  context: {},
})
console.log(AppRouter)
export default function Page(path: string) {
  const page = renderToString(
    <ServerStoreCtx.Provider value={{}}>
      <RouterCtx.Provider value={{ context: {} }}>
        <StaticRouter location={path}>
          <AppRouter />
        </StaticRouter>
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
