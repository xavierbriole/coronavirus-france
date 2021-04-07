// @flow

import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  inputLabelRoot: {
    color: theme.palette.text.hint,
  },
}))

type Props = {|
  value: string,
  onChange: (value: string) => void,
|}

export default function SearchBar({
  value,
  onChange,
}: Props): React$Element<any> {
  const classes = useStyles()

  const onInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <TextField
      id='search'
      label='Rechercher'
      variant='filled'
      value={value}
      onChange={onInputChange}
      fullWidth
      InputLabelProps={{ classes: { root: classes.inputLabelRoot } }}
    />
  )
}
