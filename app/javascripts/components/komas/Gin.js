import Koma from './Koma'

export default class Gin extends Koma {
  getNormaMovement() {
    return {
      normal: {
        num: 5,
        dx: [-1, 0, 1, -1, 1],
        dy: [-1, -1, -1, 1, 1]
      }
    }
  }

  getNarigomaMovement() {
    return {
      normal: {
        num: 6,
        dx: [-1, 0, 1, -1, 1, 0],
        dy: [-1, -1, -1, 0, 0, 1]
      }

    }
  }

  _render() {
    return this.narigoma? '金' : '銀'
  }
}
