import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import BottomBarChips from './BottomBarChips'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <BottomBarChips />
    </MuiThemeProvider>,
  div)
})
