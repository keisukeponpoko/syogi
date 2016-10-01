import Koma from './Koma'

export default class Ou extends Koma {
  getNormaMovement() {
    return {
      goOn: {
        num: 1,
        dx: [0],
        dy: [-1]
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
    return this.narigoma? '金' : '香'
  }
}
