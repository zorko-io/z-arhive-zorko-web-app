import axios from 'axios'

export default {
  async getData () {
    let response = await axios.get('/static/cars.json')
    return response.data
  }
}
