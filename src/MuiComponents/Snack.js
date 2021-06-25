// @flow

import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {|
  message: React.Node,
  severity: 'error' | 'info' | 'success' | 'warning',
  open: boolean,
  onClose: () => void,
|}

export default function PositionedSnackbar({
  message,
  severity,
  open,
  onClose,
}: Props): React$Element<any> {
  const handleClose = () => {
    onClose()
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={20000}
      style={{ maxWidth: 300 }}
    >
      <MuiAlert
        elevation={6}
        variant='filled'
        onClose={handleClose}
        severity={severity}
      >
        <Typography variant='caption'>{message}</Typography>
      </MuiAlert>
    </Snackbar>
  )
}
