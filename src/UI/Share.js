// @flow

import * as React from 'react'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import { Grid, Input, IconButton, Snackbar, Container } from '@material-ui/core'
import { FileCopy } from '@material-ui/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ReactGA from 'react-ga'

type State = {|
  displaySnack: boolean,
|}

export default class Share extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = { displaySnack: false }
  }

  handleCopyButton() {
    this.setState({ displaySnack: true })

    ReactGA.event({
      category: 'user',
      action: 'copy-to-clipboard-click',
    })
  }

  handleClose() {
    this.setState({ displaySnack: false })
  }

  render(): React.Node {
    const { displaySnack } = this.state

    return (
      <Container
        style={{ padding: 20, position: 'relative', overflow: 'auto' }}
      >
        <Grid
          direction='column'
          alignContent='center'
          alignItems='center'
          container
        >
          <Grid item>
            <CopyToClipboard
              text={window.location}
              onCopy={this.handleCopyButton.bind(this)}
            >
              <Input
                value={window.location}
                disabled
                style={{ color: '#ffffff' }}
              />
            </CopyToClipboard>
            <CopyToClipboard
              text={window.location}
              onCopy={this.handleCopyButton.bind(this)}
            >
              <IconButton color='secondary'>
                <FileCopy />
              </IconButton>
            </CopyToClipboard>
            <Snackbar
              open={displaySnack}
              onClose={this.handleClose.bind(this)}
              message='Copié dans le presse-papier !'
              autoHideDuration={3000}
            />
          </Grid>
          <Grid item>
            <IconButton>
              <EmailShareButton
                url={window.location}
                subject='Coronavirus en France - Carte en temps réel'
                body='Coronavirus: évolution de la situation en direct en France et dans les DOM-TOM'
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </IconButton>
            <IconButton>
              <FacebookShareButton url={window.location}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </IconButton>
            <IconButton>
              <LinkedinShareButton url={window.location}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </IconButton>
            <IconButton>
              <TwitterShareButton url={window.location}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </IconButton>
            <IconButton>
              <WhatsappShareButton url={window.location}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
