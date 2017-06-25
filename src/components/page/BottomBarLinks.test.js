import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import BottomBarLinks from './BottomBarLinks'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <BottomBarLinks />
    </MuiThemeProvider>,
  div)
})
