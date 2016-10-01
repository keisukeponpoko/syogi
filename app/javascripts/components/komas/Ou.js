import Koma from './Koma'

export default class Ou extends Koma {
  getNormaMovement() {
    return {
      normal : {
        num: 8,
        dx: [-1, 0, 1, -1, 1, -1, 0, 1],
        dy: [-1, -1, -1, 0, 0, 1, 1, 1]
      }
    }
  }

  canNareru() {
    return false
  }

  _render() {
    if (this.owner.name === 'gote') {
      return '玉'
    } else {
      return '王'
    }
  }

}
