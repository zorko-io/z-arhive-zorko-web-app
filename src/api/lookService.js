import axios from 'axios'

export default {
  async getLooks () {
    let response = await axios.get('/static/__mocks__/looks.json')
    return response.data
  },

  async getLookByName (name) {
    let looks = await this.getLooks()
    return looks.find((look) => (look.name === name))
  }
}
