import 'regenerator-runtime'
import React from 'react'
import ReactDom from 'react-dom'

import App from '../isomorphic/App'

ReactDom.hydrate(<App />, document.querySelector('#root'))
