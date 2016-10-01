import React from "react"
import ReactDom from "react-dom"
import Index from './components/Index'
import store from './components/Store'
import facilitator from './components/Facilitator'

const render = (state) => {
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
}

store.subscribe(render)

facilitator.init()
facilitator.setStore(store)
facilitator.update()
