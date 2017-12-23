jest.mock('axios')
import look from '../../../static/__mocks__/look/year-weather-in-seattle-1.json'

import {createLocalVue} from 'vue-test-utils'
import Vuex from 'vuex'
import module from './module'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('look module', () => {
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = module({namespaced: false})
    store = new Vuex.Store(storeOptions)
  })

  it('initializes', () => {
    expect(store).toBeTruthy()
  })

  it('loads look by name', async () => {
    expect.assertions(5)

    await store.dispatch({
      type: 'loadLook',
      name: 'year-weather-in-seattle-1'
    })

    expect(store.state.name).toEqual(look.name)
    expect(store.state.fields).toEqual(look.fields)
    expect(store.state.filters).toEqual(look.filters)
    expect(store.state.data).toEqual(look.data)
    expect(store.state.initialData).toEqual(look.initialData)
  })
})
