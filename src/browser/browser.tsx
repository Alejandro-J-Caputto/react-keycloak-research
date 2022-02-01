import 'regenerator-runtime'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from '../isomorphic/routes'

const ClientStore = React.createContext({})

ReactDom.hydrate(
  <ClientStore.Provider value={{}}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ClientStore.Provider>,
  document.querySelector('#root')
)
