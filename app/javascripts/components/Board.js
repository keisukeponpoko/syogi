import React, {Component} from 'react'
import KomaComponent from './KomaMove'
//import eventProcessor from '../event_processor.js'

export default class Board extends Component {

  constructor() {
    super()
  }

  render() {
    return(
      <table id='ban'>
        <tbody>
          {this.getGrids()}
        </tbody>
      </table>
    )
  }

  getGrids() {
    const trs = []
    for (let y = 0; y < 9; y++) {
      var tds = []
      for (let x = 0; x < 9; x++) {
        tds.push(this.getCell(x, y))
      }

      trs[y] = <tr key={y}>{tds}</tr>
    }
    return trs
  }

  getCell(x, y) {
    var koma = this.props.komaGrids[y][x]
    var komaComponent = koma? <KomaComponent koma={koma} /> : ''
    return <td className={this.getCellClassName(x, y)} key={x} onClick={this.handleCellClick(x, y)}>
      {komaComponent}
    </td>
  }

  getCellClassName(x, y) {
    var classNames = []
    if (this.props.selectedKoma) {
      this.props.selectedKomaMovablePositions.forEach(position => {
        if (position.x == x && position.y == y) classNames.push('movable')
      })
    }

    return classNames.join(' ')
  }

  handleCellClick(x, y) {
    return () => {
      alert(x, y)
    }
  }

  // handleCellClick(x, y) {
  //   return () => {
  //     eventProcessor.clickCell(x, y)
  //   }
  // }
}
//
// import KomaComponent from './koma.jsx'
// import eventProcessor from '../event_processor.js'
