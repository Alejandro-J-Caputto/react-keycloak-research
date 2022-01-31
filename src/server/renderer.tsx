import { renderToString } from 'react-dom/server'

import Home from '../isomorphic/components/Home'

export default () => {
  const page = renderToString(<Home />)

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
