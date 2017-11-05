export default {
  strict: true,
  state: {
    account: {
      name: '',
      login: ''
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.account.name && state.account.login
    }
  },
  mutations: {
    setAccount (state, account) {
      state.account.name = account.name
      state.account.login = account.login
    }
  }
}
