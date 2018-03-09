export default class Geo {
  constructor () {
    this.lock = false
  }

  getCoords () {
    if (!global.navigator) { return false }
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        return reject(new Error('Your browser doesn\'t support geolocation'))
      }
      if (this.lock) { return false }
      this.lock = true
      navigator.geolocation.getCurrentPosition(position => {
        this.lock = false
        resolve(position.coords)
      }, () => {
        return reject(new Error('The Geolocation service failed'))
      })
    })
  }
}
