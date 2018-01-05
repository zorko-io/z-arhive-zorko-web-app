import {createLocalVue, shallow} from 'vue-test-utils'
import Vuex from 'vuex'
import Datum from './Datum.vue'
import module from '../../store/datum/module'

const localVue = createLocalVue()
const datumModule = module({namespaced: true})

localVue.use(Vuex)

describe('Datum.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      loadDatum: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      modules: {
        datum: {
          ...datumModule,
          actions
        }
      }
    })
  })

  it('initialize', () => {
    const wrapper = shallow(Datum, {store, localVue})

    expect(wrapper.vm).toBeTruthy()
  })

  it('loads datum on create', () => {
    shallow(Datum, {store, localVue})

    expect(actions.loadDatum).toHaveBeenCalled()
  })
})
