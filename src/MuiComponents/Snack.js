// @flow

import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {|
  message: string,
  open: boolean,
  onClose: () => void,
|}

export default function PositionedSnackbar({
  message,
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
        severity='error'
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
