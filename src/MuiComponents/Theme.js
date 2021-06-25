// @flow

import * as React from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { grey, blueGrey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey['700'],
    },
    text: {
      primary: grey['900'],
      secondary: grey['50'],
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
