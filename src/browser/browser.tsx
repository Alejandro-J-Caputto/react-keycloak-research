import 'regenerator-runtime'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Home from '../isomorphic/components/Home'
import Routes from '../isomorphic/routes'

const ClientStore = React.createContext({})

ReactDom.hydrate(
  <ClientStore.Provider value={{}}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ClientStore.Provider>,
  document.querySelector('#root')
)
