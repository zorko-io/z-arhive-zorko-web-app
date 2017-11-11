import axios from 'axios'

const apiBaseUri = process.env.ZORKO_API_BASE_URI

export default {
  fetchAccountInfo () {
    return axios
      .get(apiBaseUri + '/auth/account', {withCredentials: true})
      .then((response) => {
        let {name, login} = response.data.user._json
        return {
          name,
          login
        }
      })
  }
}
