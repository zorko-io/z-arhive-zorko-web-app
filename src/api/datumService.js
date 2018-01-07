import axios from 'axios'

export default {
  async getData () {
    let response = await axios.get('/static/__mocks__/data/cars.json')
    return response.data
  },

  async getDatums () {
    let response = await axios.get('/static/__mocks__/datums.json')
    return response.data
  },

  async getDatumByName (name) {
    let response = await axios.get(`/static/__mocks__/datums/${name}.json`)
    return response.data
  },

  async getDataByDatumName (name) {
    const {connection} = await this.getDatumByName(name)
    const response = await axios.get(connection)
    return response.data
  }
}
