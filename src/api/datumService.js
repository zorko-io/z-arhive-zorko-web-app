import axios from 'axios'

export default {
  async getData () {
    let response = await axios.get('/static/__mock__/cars.json')
    return response.data
  }
}
