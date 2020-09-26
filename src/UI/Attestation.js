// @flow

import * as React from 'react'
import {
  IconButton,
  Link,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import PDFIcon from './Icons/PDF'
import ReactGA from 'react-ga'

export default class Attestation extends React.Component<{}> {
  onDeplacementDerogatoireClick() {
    ReactGA.event({
      category: 'user',
      action: 'download',
      label: 'deplacement-derogatoire',
    })
  }

  onDeplacementProfessionnelClick() {
    ReactGA.event({
      category: 'user',
      action: 'download',
      label: 'deplacement-professionnel',
    })
  }

  render(): React.Node {
    return (
      <Container maxWidth='sm' style={{ padding: 20 }}>
        <List>
          <ListItem onClick={this.onDeplacementDerogatoireClick.bind(this)}>
            <ListItemIcon>
              <IconButton>
                <Link
                  href={
                    process.env.PUBLIC_URL
                      ? `${process.env.PUBLIC_URL}/files/attestation-deplacement-fr.pdf`
                      : undefined
                  }
                  target='_blank'
                >
                  <PDFIcon />
                </Link>
              </IconButton>
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h5' align='center'>
                <Link
                  href={
                    process.env.PUBLIC_URL
                      ? `${process.env.PUBLIC_URL}/files/attestation-deplacement-fr.pdf`
                      : undefined
                  }
                  target='_blank'
                  underline='none'
                >
                  Attestation de déplacement dérogatoire
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem onClick={this.onDeplacementProfessionnelClick.bind(this)}>
            <ListItemIcon>
              <IconButton>
                <Link
                  href={
                    process.env.PUBLIC_URL
                      ? `${process.env.PUBLIC_URL}/files/Justificatif_de_deplacement_professionnel.pdf`
                      : undefined
                  }
                  target='_blank'
                >
                  <PDFIcon />
                </Link>
              </IconButton>
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h5' align='center'>
                <Link
                  href={
                    process.env.PUBLIC_URL
                      ? `${process.env.PUBLIC_URL}/files/Justificatif_de_deplacement_professionnel.pdf`
                      : undefined
                  }
                  target='_blank'
                  underline='none'
                >
                  Justificatif de déplacement professionnel
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Container>
    )
  }
}
