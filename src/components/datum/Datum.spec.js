import {createLocalVue, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import Vuex from 'vuex'
import Datum from './Datum.vue'
import DatumFieldsPanel from './DatumFieldsPanel.vue'
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

  it('passes fields to DatumFieldsPanel', () => {
    const fields = [
      {
        'text': 'Name'
      },
      {
        'text': 'Miles_per_Gallon'
      },
      {
        'text': 'Cylinders'
      }
    ]
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
    const datumWrapper = shallow(Datum, {
      store,
      localVue
    })

    const datumFieldsPanelWrapper = datumWrapper.find(DatumFieldsPanel)

    expect(datumFieldsPanelWrapper.vm.$props.fields).toEqual(fields)
  })
})
