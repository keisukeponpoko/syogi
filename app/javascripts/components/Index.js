// import Komadai from './components/Board'

import React, {Component} from 'react'
import Board from './Board'
import Komadai from './Komadai'

export default class Index extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.banKomas);
    return (
      <div>
        <Board
          komaGrids={this.props.banKomas}
          selectedKoma={this.props.selectedKoma}
          selectedKomaMovablePositions={this.props.selectedKomaMovablePositions} />
        <Komadai className='sente_komadai' komas={this.props.komadaiKomas.sente} />
        <Komadai className='gote_komadai' komas={this.props.komadaiKomas.gote} />
      </div>
    )
  }
}
