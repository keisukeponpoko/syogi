import Koma from './Koma'

export default class Kaku extends Koma {
  getNormaMovement() {
    return {
      goOn: {
        num: 4,
        dx: [-1, 1, 1, -1],
        dy: [-1, -1, 1, 1]
      }
    }
  }

  getNarigomaMovement() {
    return {
      normal : {
        num: 8,
        dx: [-1, 0, 1, -1, 1, -1, 0, 1],
        dy: [-1, -1, -1, 0, 0, 1, 1, 1]
      },
      goOn: {
        num: 4,
        dx: [-1, 1, 1, -1],
        dy: [-1, -1, 1, 1]
      }
    }
  }

  _render() {
    return this.narigoma? '馬' : '角'
  }
}
