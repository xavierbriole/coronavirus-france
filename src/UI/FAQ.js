// @flow

import * as React from 'react'
import ReactGA from 'react-ga'
import { Panel } from '../MuiComponents'
import faqDatas from '../datas/faq.json'

export default class FAQ extends React.Component<{}> {
  onQuestionClick(title: string) {
    ReactGA.event({ category: 'user', action: 'question-click', label: title })
  }

  render(): React.Node {
    return (
      <Panel datas={faqDatas} onPanelOpen={this.onQuestionClick.bind(this)} />
    )
  }
}
