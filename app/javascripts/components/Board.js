import React, {Component} from 'react'
import KomaComponent from './KomaMove'
import Event from './Event'

export default class Board extends Component {

  constructor() {
    super()
    this.event = new Event()
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
      this.event.clickCell(x, y)
    }
  }
}
