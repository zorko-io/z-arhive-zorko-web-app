import axios from 'axios'

export default {
  async getLooks () {
    let response = await axios.get('/static/__mock__/looks.json')
    return response.data
  }
}
