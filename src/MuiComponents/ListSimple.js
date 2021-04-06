// @flow

import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import CancelIcon from '@material-ui/icons/Cancel'
import match from '../Helpers/Filter'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    padding: 0,
  },
  avatar: {
    backgroundColor: 'transparent',
  },
  greenIcon: {
    color: theme.palette.success.main,
  },
  orangeIcon: {
    color: theme.palette.warning.main,
  },
  redIcon: {
    color: theme.palette.error.main,
  },
}))

type Props = {|
  datas: Array<{
    title: string,
    description: string,
    color: string,
  }>,
  filterValue: string,
|}

export default function FolderList({
  datas,
  filterValue,
}: Props): React$Element<any> {
  const classes = useStyles()

  const renderIcon = (color: string) => {
    switch (color) {
      case 'green':
        return <CheckCircleIcon className={classes.greenIcon} />
      case 'orange':
        return <CheckCircleIcon className={classes.orangeIcon} />
      case 'red':
        return <CancelIcon className={classes.redIcon} />
      default:
        break
    }
  }

  const filterDatas = (value: string) => {
    return datas.filter(({ title, description }) =>
      match(value, [title, description])
    )
  }

  return (
    <List className={classes.root}>
      {filterDatas(filterValue).map((data, index) => (
        <ListItem key={index} button>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>{renderIcon(data.color)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography variant='body1'>{data.title}</Typography>}
            secondary={
              <Typography variant='body2'>{data.description}</Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}
