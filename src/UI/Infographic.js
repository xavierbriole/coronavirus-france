// @flow

import * as React from 'react'
import { ListSimple, SearchBar } from '../MuiComponents'
import infographicDatas from '../datas/infographic.json'

type State = {|
  value: string,
|}

export default class Infographic extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      value: '',
    }
  }

  onInputChange(value: string) {
    this.setState({ value: value })
  }

  render(): React.Node {
    const { value } = this.state

    return (
      <React.Fragment>
        <SearchBar value={value} onChange={this.onInputChange.bind(this)} />
        <ListSimple filterValue={value} datas={infographicDatas} />
      </React.Fragment>
    )
  }
}
