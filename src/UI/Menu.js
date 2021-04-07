// @flow

import * as React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
  Badge,
} from '@material-ui/core'
import { QuestionAnswer, Share, CloudDownload, Info } from '@material-ui/icons'
import packageJson from '../../package.json'

type Props = {|
  onItemClick: (item: { id: string, title: string }) => void,
|}

export default class Menu extends React.Component<Props> {
  onButtonClick(item: { id: string, title: string }) {
    const { onItemClick } = this.props

    onItemClick(item)
  }

  render(): React.Node {
    return (
      <React.Fragment>
        <List>
          <ListItem
            button
            key='infographic'
            onClick={this.onButtonClick.bind(this, {
              id: 'infographic',
              title: 'Infographie',
            })}
          >
            <ListItemIcon>
              <Badge color='error' badgeContent='!'>
                <Info color='textPrimary' />
              </Badge>
            </ListItemIcon>
            <ListItemText color='textPrimary' primary='Infographie' />
          </ListItem>
          <ListItem
            button
            key='attest'
            onClick={this.onButtonClick.bind(this, {
              id: 'attest',
              title: 'Télécharger une attestation',
            })}
          >
            <ListItemIcon>
              <Badge color='error' badgeContent={1}>
                <CloudDownload color='textPrimary' />
              </Badge>
            </ListItemIcon>
            <ListItemText color='textPrimary' primary='Attestations' />
          </ListItem>
          <ListItem
            button
            key='faq'
            onClick={this.onButtonClick.bind(this, {
              id: 'faq',
              title: 'Questions / Réponses',
            })}
          >
            <ListItemIcon>
              <QuestionAnswer color='textPrimary' />
            </ListItemIcon>
            <ListItemText color='textPrimary' primary='FAQ' />
          </ListItem>
          <ListItem
            button
            key='share'
            onClick={this.onButtonClick.bind(this, {
              id: 'share',
              title: 'Partager',
            })}
          >
            <ListItemIcon>
              <Share color='textPrimary' />
            </ListItemIcon>
            <ListItemText color='textPrimary' primary='Partager' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key='github'>
            <ListItemText>
              <Typography variant='caption' color='textPrimary'>
                <Link
                  href='https://github.com/xavierbriole/coronavirus-france'
                  target='_blank'
                >
                  GitHub
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem key='credits'>
            <ListItemText>
              <Typography variant='caption' color='textPrimary'>
                <Link href='https://www.esrifrance.fr/' target='_blank'>
                  Carte réalisée par Esri France
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key='version'>
            <ListItemText>
              <Typography variant='caption' color='textPrimary'>
                {`Version ${packageJson.version}`}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem key='author'>
            <ListItemText>
              <Typography variant='caption' color='textPrimary'>
                {`${new Date().getFullYear()} © Xavier B.`}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key='cookies'>
            <ListItemText>
              <Typography variant='caption' color='textPrimary'>
                Ce site utilise les cookies pour améliorer votre expérience de
                navigation.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </React.Fragment>
    )
  }
}
