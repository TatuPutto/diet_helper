import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

/* eslint react/jsx-filename-extension: 0 */

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
