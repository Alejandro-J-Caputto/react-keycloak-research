import React from 'react'
import ReactDom from 'react-dom'

import Home from '../isomorphic/components/Home'

ReactDom.hydrate(<Home />, document.querySelector('#root'))
