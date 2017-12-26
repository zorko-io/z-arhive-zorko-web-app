import looks from '../static/__mocks__/looks.json'

export default {
  async get (url) {
    if (url === '/static/__mocks__/looks.json') {
      return {
        data: looks
      }
    }
  }
}
