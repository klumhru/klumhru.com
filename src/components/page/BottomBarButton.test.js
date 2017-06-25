import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import BottomBarButton from './BottomBarButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <BottomBarButton
        url="https://google.com"
        label="testButton"
        icon="test"
      />
    </MuiThemeProvider>,
  div)
})
