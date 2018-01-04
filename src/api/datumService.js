import axios from 'axios'

export default {
  async getData () {
    let response = await axios.get('/static/__mocks__/data/cars.json')
    return response.data
  },

  async getDatums () {
    let response = await axios.get('/static/__mocks__/datums.json')
    return response.data
  }
}
