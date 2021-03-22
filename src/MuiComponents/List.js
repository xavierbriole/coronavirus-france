// @flow

import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListAvatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  subheader: {
    color: theme.palette.text.primary,
    zIndex: 2,
  },
}))

type Props = {|
  items: Array<{
    id: string,
    subheaderTitle: string,
    contents: Array<{
      id: string,
      title: string,
      updated: string,
      url: string,
      new: boolean,
    }>,
  }>,
  onClick: (subheaderId: string, contentId: string, url: string) => void,
|}

export default function PinnedSubheaderList({
  items,
  onClick,
}: Props): React$Element<any> {
  const classes = useStyles()

  return (
    <List className={classes.root} subheader={<li />}>
      {items.map((item) => (
        <li key={`section-${item.id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.subheader}>
              {item.subheaderTitle}
            </ListSubheader>
            {item.contents.map((content) => (
              <ListItem
                key={`item-${content.id}`}
                onClick={() => onClick(item.id, content.id, content.url)}
                button
              >
                <ListItemAvatar>
                  <Badge
                    color='error'
                    badgeContent='New'
                    invisible={!content.new}
                  >
                    <ListAvatar>
                      <PictureAsPdfIcon />
                    </ListAvatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant='body1'>{content.title}</Typography>
                  }
                  secondary={
                    <Typography variant='body2'>{content.updated}</Typography>
                  }
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}
