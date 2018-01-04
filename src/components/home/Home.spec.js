import {createLocalVue, mount, shallow} from 'vue-test-utils'
import Vuex from 'vuex'
import Home from './Home.vue'
import module from '../../store/home/module'

const localVue = createLocalVue()
const homeModule = module({namespaced: true})

localVue.use(Vuex)

describe('Home.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        home: {
          getters: homeModule.getters,
          state: homeModule.state
        }
      }
    })
  })

  it('initialize', () => {
    const wrapper = mount(Home, {store, localVue})

    expect(wrapper.vm).toBeTruthy()
  })

  it('redirects to look if look opened', () => {
    const lookInfo = {title: 'blblbl', path: 'bazzz'}
    const $router = {
      push: jest.fn()
    }
    const wrapper = shallow(Home, {
      store,
      localVue,
      mocks: {
        $router
      }
    })

    wrapper.vm.onOpenLook(lookInfo)

    expect($router.push).toHaveBeenCalledWith(lookInfo.path)
  })

  it('redirects to datum if datum opened', () => {
    const datumInfo = {name: 'bazzz'}
    const $router = {
      push: jest.fn()
    }
    const wrapper = shallow(Home, {
      store,
      localVue,
      mocks: {
        $router
      }
    })

    wrapper.vm.onOpenDatum(datumInfo)

    expect($router.push).toHaveBeenCalledWith('/datums/bazzz')
  })
})
