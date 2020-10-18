// @flow

import * as React from 'react'
import { List } from '../MuiComponents'
import ReactGA from 'react-ga'

export default class Attestation extends React.Component<{}> {
  onItemClick(subheaderId: string, contentId: string, url?: string) {
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
                url: process.env.PUBLIC_URL
                  ? `${process.env.PUBLIC_URL}/files/couvre-feu/attestation-de-deplacement-derogatoire.pdf`
                  : undefined,
              },
              {
                id: 'deplacement-professionnel',
                title: 'Justificatif de déplacement professionnel',
                updated: '17 octobre 2020',
                url: process.env.PUBLIC_URL
                  ? `${process.env.PUBLIC_URL}/files/couvre-feu/justificatif-de-deplacement-professionnel.pdf`
                  : undefined,
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
                url: process.env.PUBLIC_URL
                  ? `${process.env.PUBLIC_URL}/files/confinement/attestation-deplacement-fr.pdf`
                  : undefined,
              },
              {
                id: 'deplacement-professionnel',
                title: 'Justificatif de déplacement professionnel',
                updated: '15 avril 2020',
                url: process.env.PUBLIC_URL
                  ? `${process.env.PUBLIC_URL}/files/confinement/Justificatif_de_deplacement_professionnel.pdf`
                  : undefined,
              },
            ],
          },
        ]}
      />
    )
  }
}
