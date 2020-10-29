// @flow

import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {|
  message: string,
|}

export default function PositionedSnackbar({
  message,
}: Props): React$Element<any> {
  const [state, setState] = React.useState({
    open: true,
    vertical: 'top',
    horizontal: 'right',
  })

  const { vertical, horizontal, open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      key={vertical + horizontal}
      autoHideDuration={20000}
      style={{ maxWidth: 300 }}
    >
      <MuiAlert
        elevation={6}
        variant='filled'
        onClose={handleClose}
        severity='error'
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
