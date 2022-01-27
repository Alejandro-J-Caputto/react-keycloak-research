import React from 'react'

import { renderToString } from 'react-dom/server'
import Home from '../isomorphic/components/Home'

export const Page = renderToString(<Home />)
