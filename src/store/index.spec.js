import {createLocalVue} from 'vue-test-utils'
import Vuex from 'vuex'
import store from './index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Integration - Store', () => {
  it('can initialize store with default options', () => {
    const globalStore = new Vuex.Store(store)

    expect(globalStore).toBeTruthy()
  })
})
