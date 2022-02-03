/* eslint-disable consistent-return */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { renderMatches, RouteMatch } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { AnyAction, EmptyObject, Store } from 'redux'

export const ServerStoreCtx = React.createContext({})
const RouterCtx = React.createContext({
  context: {},
})

export default function Page(
  path: string,
  matches: RouteMatch<string>[] | null,
  appStore: Store<EmptyObject, AnyAction>
) {
  const page = renderToString(
    <Provider store={appStore}>
      <RouterCtx.Provider value={{ context: {} }}>
        <StaticRouter location={path}>{renderMatches(matches)}</StaticRouter>
      </RouterCtx.Provider>
    </Provider>
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
