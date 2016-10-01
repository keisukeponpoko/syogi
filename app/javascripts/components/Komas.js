import {Hu, Kyousya, Keima, Gin, Kin, Ou, Hisya, Kaku} from './komas/group.js'

export default class Komas {
  constructor(name) {
    this.komas = [];
  }

  initKomas(sente, gote) {
    this.komas.push(new Kyousya({
      position: {x: 0, y: 8},
      owner: sente
    }))
    this.komas.push(new Keima({
      position: {x: 1, y: 8},
      owner: sente
    }))
    this.komas.push(new Gin({
      position: {x: 2, y: 8},
      owner: sente
    }))
    this.komas.push(new Kin({
      position: {x: 3, y: 8},
      owner: sente
    }))
    this.komas.push(new Kin({
      position: {x: 5, y: 8},
      owner: sente
    }))
    this.komas.push(new Gin({
      position: {x: 6, y: 8},
      owner: sente
    }))
    this.komas.push(new Keima({
      position: {x: 7, y: 8},
      owner: sente
    }))
    this.komas.push(new Kyousya({
      position: {x: 8, y: 8},
      owner: sente
    }))

    this.komas.push(new Hisya({
      position: {x: 7, y: 7},
      owner: sente
    }))
    this.komas.push(new Kaku({
      position: {x: 1, y: 7},
      owner: sente
    }))

    for (let i = 0; i < 9; i ++) {
      this.komas.push(new Hu({
        position: {x: i, y: 6},
        owner: sente
      }))
    }


    this.komas.push(new Kyousya({
      position: {x: 0, y: 0},
      owner: gote
    }))
    this.komas.push(new Keima({
      position: {x: 1, y: 0},
      owner: gote
    }))
    this.komas.push(new Gin({
      position: {x: 2, y: 0},
      owner: gote
    }))
    this.komas.push(new Kin({
      position: {x: 3, y: 0},
      owner: gote
    }))
    this.komas.push(new Kin({
      position: {x: 5, y: 0},
      owner: gote
    }))
    this.komas.push(new Gin({
      position: {x: 6, y: 0},
      owner: gote
    }))
    this.komas.push(new Keima({
      position: {x: 7, y: 0},
      owner: gote
    }))
    this.komas.push(new Kyousya({
      position: {x: 8, y: 0},
      owner: gote
    }))

    for (let i = 0; i < 9; i ++) {
      this.komas.push(new Hu({
        position: {x: i, y: 2},
        owner: gote
      }))
    }

    var senteOu = new Ou({
      position: {x: 4, y: 8},
      owner: sente
    })
    this.komas.push(senteOu)

    var goteOu = new Ou({
      position: {x: 4, y: 0},
      owner: gote
    })
    this.komas.push(goteOu)

    return {
      sente: senteOu,
      gote: goteOu
    }
  }
}
