// @flow

import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

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
      message={message}
      key={vertical + horizontal}
      autoHideDuration={20000}
      style={{ maxWidth: 300 }}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  )
}
