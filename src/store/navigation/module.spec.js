import {createLocalVue} from 'vue-test-utils'
import Vuex from 'vuex'
import module from './module'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('navigation module', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = module({namespaced: false})
    store = new Vuex.Store(storeOptions)
  })

  it('initializes', () => {
    expect(store).toBeTruthy()
  })
})
