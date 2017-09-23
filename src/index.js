import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'typeface-roboto/index.css'
import 'mdi/css/materialdesignicons.css'

import { MuiThemeProvider } from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { theme } from './components/page/styles'

import configureStore from './lib/state/store'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

injectTapEventPlugin()
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'),
)
registerServiceWorker()
