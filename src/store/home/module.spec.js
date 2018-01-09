jest.mock('axios')
import looks from '../../../static/__mocks__/looks.json'

import {createLocalVue} from 'vue-test-utils'
import Vuex from 'vuex'
import module from './module'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('home module', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = module({namespaced: false})
    store = new Vuex.Store(storeOptions)
  })

  it('initializes', () => {
    expect(store).toBeTruthy()
  })

  it('loads looks', async () => {
    expect.assertions(1)

    await store.dispatch({
      type: 'loadLooks'
    })

    expect(store.state.looks).toEqual(looks)
  })
})
