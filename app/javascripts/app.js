import React from "react"
import ReactDom from "react-dom"
import Index from './components/Index'
import Store from './components/Store'
import Facilitator from './components/Facilitator'

const store = new Store();
const facilitator = new Facilitator();

facilitator.init()
facilitator.setStore(store)
facilitator.update()

ReactDom.render(
  <div>
    <Index
      banKomas={store.state.banKomas}
      komadaiKomas={store.state.komadaiKomas}
      selectedKoma={store.state.selectedKoma}
      selectedKomaMovablePositions={store.state.selectedKomaMovablePositions}
    />
  </div>,
  document.getElementById('container')
)

// const render = (state) => {
//   ReactDOM.render(
//     <div>
//       <App
//         banKomas={state.banKomas}
//         komadaiKomas={state.komadaiKomas}
//         selectedKoma={state.selectedKoma}
//         selectedKomaMovablePositions={state.selectedKomaMovablePositions} />
//     </div>,
//     document.getElementById('container')
//   )
// }
//
// store.subscribe(render)
//
