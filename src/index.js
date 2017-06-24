import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './lib/state/store'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

injectTapEventPlugin()
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
)
registerServiceWorker()
