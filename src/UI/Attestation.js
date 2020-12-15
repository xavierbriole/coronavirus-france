// @flow

import * as React from 'react'
import { List } from '../MuiComponents'
import ReactGA from 'react-ga'
import attests from '../attests.json'

export default class Attestation extends React.Component<{}> {
  onItemClick(subheaderId: string, contentId: string, url: string) {
    ReactGA.event({
      category: 'user',
      action: 'download',
      label: `${subheaderId === '' ? '' : `${subheaderId}-`}${contentId}`,
    })

    window.open(
      `${window.location}files/${
        subheaderId === '' ? 'confinement' : subheaderId
      }/${url}`
    )
  }

  render(): React.Node {
    return <List onClick={this.onItemClick.bind(this)} items={attests.files} />
  }
}
