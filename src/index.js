import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'typeface-roboto/index.css'
import 'mdi/css/materialdesignicons.css'

import { MuiThemeProvider, createMuiTheme, createPalette } from 'material-ui/styles'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from './lib/state/store'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const theme = createMuiTheme({
  palette: createPalette({
    type: 'dark', // Switching the dark mode on is a single property value change.
  }),
})

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
