// @flow

import * as React from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { orange, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange['A700'],
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    background: {
      default: grey['A400'],
      paper: grey['A400'],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
})

type Props = {|
  children: React.ChildrenArray<any>,
|}

export default class Theme extends React.Component<Props> {
  render(): React.Node {
    const { children } = this.props

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
}
