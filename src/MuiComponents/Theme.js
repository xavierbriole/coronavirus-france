// @flow

import * as React from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { grey, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green['700'],
    },
    secondary: {
      main: grey['50'],
    },
    text: {
      primary: grey['50'],
      secondary: grey['50'],
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
