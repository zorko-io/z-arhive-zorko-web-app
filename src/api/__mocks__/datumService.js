export default {
  async getDatumByName (name) {
    switch (name) {
      case 'notUsed':
        return {
          name: 'notUsed',
          looks: []
        }
      case 'used':
        return {
          name: 'used',
          looks: ['baz', 'bar']
        }
    }
    return null
  }
}
