import {createLocalVue, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import Vuex from 'vuex'
import ZHome from './ZHome.vue'
import ZBaseLooks from '../base/ZBaseLooks.vue'
import ZBaseDatums from '../base/ZBaseDatums.vue'
import module from '../../store/home/module'

import mockLooks from '../../../static/__mocks__/looks.json'
import mockDatums from '../../../static/__mocks__/datums.json'

const localVue = createLocalVue()
const homeModule = module({namespaced: true})

localVue.use(Vuex)

describe('ZHome.vue', () => {
  let store
  let state
  let propsData

  beforeEach(() => {
    state = {
      ...homeModule.state,
      looks: mockLooks,
      datums: mockDatums
    }

    propsData = {
      looksPreview: false,
      datumsPreview: false
    }

    store = new Vuex.Store({
      state: {},
      modules: {
        home: {
          ...homeModule,
          state
        }
      }
    })
  })

  it('passes props to `ZBaseLooks`', () => {
    propsData.looksPreview = true
    const wrapper = shallow(ZHome, {
      store,
      localVue,
      propsData
    })

    const {vm} = wrapper.find(ZBaseLooks)

    expect(vm.$props.items).toEqual(mockLooks)
  })

  it('passes props to `ZBaseDatums`', () => {
    propsData.datumsPreview = true
    const wrapper = shallow(ZHome, {
      store,
      localVue,
      propsData
    })

    const {vm} = wrapper.find(ZBaseDatums)

    expect(vm.$props.items).toEqual(mockDatums)
  })

  it('changes route because datum`s item `openDatum` event', () => {
    propsData.datumsPreview = true
    const datumInfo = {name: 'bazzz'}
    const $router = {
      push: jest.fn()
    }
    const wrapper = shallow(ZHome, {
      store,
      localVue,
      propsData,
      mocks: {
        $router
      }
    })
    const {vm} = wrapper.find(ZBaseDatums)

    vm.$emit('datumInput', datumInfo)

    expect($router.push).toHaveBeenCalledWith('/datums/bazzz')
  })

  it('has same HTML for looks preview', () => {
    const renderer = createRenderer()
    const homeWrapper = shallow(ZHome, {
      store,
      localVue,
      propsData
    })

    renderer.renderToString(homeWrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
