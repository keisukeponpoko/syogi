import Koma from './Koma'

export default class Kin extends Koma {
  getNormaMovement() {
    return {
      normal: {
        num: 6,
        dx: [-1, 0, 1, -1, 1, 0],
        dy: [-1, -1, -1, 0, 0, 1]
      }
    }
  }

  canNareru() {
    return false
  }

  _render() {
    return '金'
  }
}
