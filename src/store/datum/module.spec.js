jest.mock('axios')
import cars from '../../../static/__mocks__/datums/cars.json'

import {createLocalVue} from 'vue-test-utils'
import Vuex from 'vuex'
import module from './module'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Datum Module', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = module({namespaced: false})
    store = new Vuex.Store(storeOptions)
  })

  it('initializes', () => {
    expect(store).toBeTruthy()
  })

  it('loads datum', async () => {
    expect.assertions(1)

    await store.dispatch({
      type: 'loadDatum',
      name: 'cars'
    })

    expect(store.state.datum).toEqual(cars)
  })
})
