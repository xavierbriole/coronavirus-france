// @flow

import * as React from 'react'
import { List } from '../MuiComponents'
import ReactGA from 'react-ga'

export default class Attestation extends React.Component<{}> {
  onItemClick(subheaderId: string, contentId: string, url: string) {
    ReactGA.event({
      category: 'user',
      action: 'download',
      label: `${subheaderId === '' ? '' : `${subheaderId}-`}${contentId}`,
    })

    window.open(url)
  }

  render(): React.Node {
    return (
      <List
        onClick={this.onItemClick.bind(this)}
        items={[
          {
            id: 'couvre-feu',
            subheaderTitle: 'Couvre-feu',
            contents: [
              {
                id: 'deplacement-derogatoire',
                title: 'Attestation de déplacement dérogatoire',
                updated: '17 octobre 2020',
                url: `${window.location}files/couvre-feu/attestation-de-deplacement-derogatoire.pdf`,
              },
              {
                id: 'deplacement-professionnel',
                title: 'Justificatif de déplacement professionnel',
                updated: '17 octobre 2020',
                url: `${window.location}files/couvre-feu/justificatif-de-deplacement-professionnel.pdf`,
              },
            ],
          },
          {
            id: '',
            subheaderTitle: 'Confinement',
            contents: [
              {
                id: 'deplacement-derogatoire',
                title: 'Attestation de déplacement dérogatoire',
                updated: '15 avril 2020',
                url: `${window.location}files/confinement/attestation-deplacement-fr.pdf`,
              },
              {
                id: 'deplacement-professionnel',
                title: 'Justificatif de déplacement professionnel',
                updated: '15 avril 2020',
                url: `${window.location}files/confinement/Justificatif_de_deplacement_professionnel.pdf`,
              },
            ],
          },
        ]}
      />
    )
  }
}
