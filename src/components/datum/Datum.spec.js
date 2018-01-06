import {createLocalVue, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
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

  it('has same shallow HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = shallow(Datum, {
      store,
      localVue
    })

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
