import { configure, decorate, observable, action } from 'mobx'
import store from 'store/dist/store.modern'

configure({enforceActions: true})

const keyPositions = 'positions'
const keyLastPosition = 'lastPosition'

class Store {
  positions = store.get(keyPositions) || []
  initialPosition = store.get(keyLastPosition)
  currentPosition = {}

  addPosition = (pos) => {
    pos.id = Math.floor(Math.random() * 10000000)
    this.positions = [...this.positions, pos]
    store.set(keyPositions, this.positions)
  }

  deletePosition = (posId) => {
    this.positions = this.positions.filter(({id}) => id !== posId)
    store.set(keyPositions, this.positions)
  }

  setCurrentPosition (pos) {
    this.currentPosition = pos
    store.set(keyLastPosition, pos)
  }
}

decorate(Store, {
  positions: observable,
  currentPosition: observable,
  addPosition: action,
  deletePosition: action,
  setCurrentPosition: action
})

export default Store
