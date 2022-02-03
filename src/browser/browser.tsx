import 'regenerator-runtime'
import React from 'react'
import ReactDom from 'react-dom'

// eslint-disable-next-line import/no-cycle

import App from '../isomorphic/App'

ReactDom.hydrate(<App />, document.querySelector('#root'))
