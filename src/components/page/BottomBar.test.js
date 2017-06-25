import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import BottomBar from './BottomBar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MuiThemeProvider><BottomBar /></MuiThemeProvider>, div)
})
