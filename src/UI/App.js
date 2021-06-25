// @flow

import * as React from 'react'
import ReactGA from 'react-ga'
import { Theme, NavigationBar, Dialog, Snack } from '../MuiComponents'
import Menu from './Menu'
import Frame from './Frame'
import FAQ from './FAQ'
import Share from './Share'
import Attestation from './Attestation'
import Infographic from './Infographic'
import Calendar from './Calendar'
import { Link } from '@material-ui/core'
import Storage from '../Helpers/storage'
import packageJson from '../../package.json'

type State = {|
  modalOpen: boolean,
  snackOpen: boolean,
  currentItem?: { id: string, title: string },
|}

export default class App extends React.Component<{}, State> {
  UA: string
  displaySnackVersion: string

  constructor(props: {}) {
    super(props)

    this.UA = 'UA-127796557-2'
    this.displaySnackVersion = `displaySnack-${packageJson.version}`

    const shouldDisplaySnack = Storage.get(this.displaySnackVersion) === null

    this.state = {
      modalOpen: false,
      snackOpen: shouldDisplaySnack,
      currentItem: undefined,
    }
  }

  componentDidMount() {
    if (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    ) {
      window[`ga-disable-${this.UA}`] = true
    }

    ReactGA.initialize(this.UA)
    ReactGA.pageview(window.location.pathname)
  }

  handleModalOpen(item: { id: string, title: string }) {
    this.setState(
      {
        modalOpen: true,
        currentItem: { id: item.id, title: item.title },
      },
      () => {
        ReactGA.event({
          category: 'user',
          action: 'open-modal',
          label: item.id,
        })
      }
    )
  }

  handleModalClose() {
    this.setState({ modalOpen: false, currentItem: undefined }, () => {
      ReactGA.event({ category: 'user', action: 'close-modal' })
    })
  }

  handleSnackClose() {
    this.setState({ snackOpen: false }, () => {
      Storage.set(this.displaySnackVersion, 'false')
    })
  }

  renderModalContent(): ?React.Node {
    const { currentItem } = this.state

    if (currentItem === undefined) {
      return null
    }

    switch (currentItem.id) {
      case 'faq':
        return <FAQ />
      case 'share':
        return <Share />
      case 'attest':
        return <Attestation />
      case 'infographic':
        return <Infographic />
      case 'calendar':
        return <Calendar />
      default:
        break
    }
  }

  render(): React.Node {
    const { modalOpen, snackOpen, currentItem } = this.state

    return (
      <Theme>
        <React.Fragment>
          <Dialog
            title={currentItem ? currentItem.title : ''}
            open={modalOpen}
            onClose={this.handleModalClose.bind(this)}
          >
            {this.renderModalContent()}
          </Dialog>
          <NavigationBar
            title={
              <Link
                href={window.location}
                color='textSecondary'
                underline='none'
              >
                Coronavirus en France
              </Link>
            }
            menu={<Menu onItemClick={this.handleModalOpen.bind(this)} />}
          >
            <Frame />
          </NavigationBar>
          <Snack
            message={
              <React.Fragment>
                Il n'y a plus de couvre-feu, profitez bien!
                <br />
                Pensez à vous faire vacciner!
              </React.Fragment>
            }
            severity='success'
            onClose={this.handleSnackClose.bind(this)}
            open={snackOpen}
          />
        </React.Fragment>
      </Theme>
    )
  }
}
