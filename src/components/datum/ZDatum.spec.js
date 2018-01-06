import {createLocalVue, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import Vuex from 'vuex'
import ZDatum from './ZDatum.vue'
import ZBaseLooks from '../base/ZBaseLooks.vue'
import ZDatumFieldsPanel from './ZDatumFieldsPanel.vue'
import module from '../../store/datum/module'

const localVue = createLocalVue()
const datumModule = module({namespaced: true})

localVue.use(Vuex)

describe('ZDatum.vue', () => {
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
    const wrapper = shallow(ZDatum, {store, localVue})

    expect(wrapper.vm).toBeTruthy()
  })

  it('loads datum on create', () => {
    shallow(ZDatum, {store, localVue})

    expect(actions.loadDatum).toHaveBeenCalled()
  })

  it('has same shallow HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = shallow(ZDatum, {
      store,
      localVue
    })

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('passes fields to ZDatumFieldsPanel', () => {
    const fields = ['foo', 'bazz']
    const state = {
      ...datumModule.state,
      datum: {
        fields
      }
    }
    store = new Vuex.Store({
      state: {},
      modules: {
        datum: {
          ...datumModule,
          actions,
          state
        }
      }
    })
    const datumWrapper = shallow(ZDatum, {
      store,
      localVue
    })

    const {vm} = datumWrapper.find(ZDatumFieldsPanel)

    expect(vm.$props.fields).toEqual(fields)
  })

  it('passes looks to ZBaseLooks', () => {
    const looks = ['foo', 'bazz']
    const state = {
      ...datumModule.state,
      looks
    }
    store = new Vuex.Store({
      state: {},
      modules: {
        datum: {
          ...datumModule,
          actions,
          state
        }
      }
    })
    const datumWrapper = shallow(ZDatum, {
      store,
      localVue
    })

    const {vm} = datumWrapper.find(ZBaseLooks)

    expect(vm.$props.items).toEqual(looks)
  })
})
