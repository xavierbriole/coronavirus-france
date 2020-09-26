// @flow

import * as React from 'react'
import ReactGA from 'react-ga'
import { Panel } from '../MuiComponents'
import FAQData from '../FAQData.json'

export default class FAQ extends React.Component<{}> {
  onQuestionClick(title: string) {
    ReactGA.event({ category: 'user', action: 'question-click', label: title })
  }

  render(): React.Node {
    return (
      <Panel
        datas={FAQData.faq}
        onPanelOpen={this.onQuestionClick.bind(this)}
      />
    )
  }
}
