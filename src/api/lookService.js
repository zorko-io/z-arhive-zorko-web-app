import axios from 'axios'

export default {
  async getLooks () {
    let response = await axios.get('/static/__mocks__/looks.json')
    return response.data
  },

  async getLookByName (name) {
    let looks = await this.getLooks()
    let look

    const lookPreview = looks.find((look) => (look.name === name))

    if (lookPreview) {
      const {data} = await axios.get(`/static/__mocks__/looks/${lookPreview.name}.json`)
      look = data
    }
    return look
  }
}
