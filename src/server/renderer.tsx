import { renderToString } from 'react-dom/server'

import Home from '../isomorphic/components/Home'

const page = renderToString(<Home />)

export default page
