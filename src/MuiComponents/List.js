// @flow

import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListAvatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'

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
            <ListSubheader>{item.subheaderTitle}</ListSubheader>
            {item.contents.map((content) => (
              <ListItem
                key={`item-${content.id}`}
                onClick={() => onClick(item.id, content.id, content.url)}
                button
              >
                <ListItemAvatar>
                  <ListAvatar>
                    <PictureAsPdfIcon />
                  </ListAvatar>
                </ListItemAvatar>
                <ListItemText
                  primary={content.title}
                  secondary={content.updated}
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}
