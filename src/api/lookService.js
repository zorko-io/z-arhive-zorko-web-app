import axios from 'axios'

export default {
  async getLooks () {
    // TODO: move to separate looks preview service
    let response = await axios.get('/static/__mocks__/looks.json')
    return response.data
  },

  async search ({names}) {
    let lookPreviews = await this.getLooks()
    const result = lookPreviews.filter((look) => names.some((name) => (name === look.name)))
    return result
  },

  async getLookByName (name) {
    let lookPreviews = await this.getLooks()
    let look

    const lookPreview = lookPreviews.find((look) => (look.name === name))

    if (lookPreview) {
      const {data} = await axios.get(`/static/__mocks__/looks/${lookPreview.name}.json`)
      look = data
    }
    return look
  }
}
