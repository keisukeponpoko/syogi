import React, {Component} from 'react'
import KomaComponent from './KomaMove'

export default class Komadai extends Component {
  handleKomaClick(koma) {
    return () => {
      if (koma.owner == this.props.teban)
      this.props.selectKoma(koma)
    }
  }

  renderKomas() {
    var komas = []
    this.props.komas.forEach(koma => {
      komas.push(
        <KomaComponent
          key={koma.id}
          koma={koma} />
      )
    })
    return komas
  }

  render() {
    return <div>{this.renderKomas()}</div>
  }
}
