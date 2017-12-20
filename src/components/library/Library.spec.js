import {createLocalVue, mount, shallow} from 'vue-test-utils'
import Vuex from 'vuex'
import Library from './Library.vue'
import module from '../../store/library/module'

const localVue = createLocalVue()
const libraryModule = module({namespaced: true})

localVue.use(Vuex)

describe('Library.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      modules: {
        library: {
          getters: libraryModule.getters,
          state: libraryModule.state
        }
      }
    })
  })

  it('initialize', () => {
    const wrapper = mount(Library, {store, localVue})

    expect(wrapper.vm).toBeTruthy()
  })

  it('displays looks category', () => {
    const wrapper = mount(Library, {store, localVue})

    const title = wrapper.find('.js-Library-looks-category')

    expect(title.text()).toEqual('Popular Looks')
  })

  it('changes route on open', () => {
    const lookInfo = {title: 'blblbl', path: 'bazzz'}
    const $router = {
      push: jest.fn()
    }
    const wrapper = shallow(Library, {
      store,
      localVue,
      mocks: {
        $router
      }
    })

    wrapper.vm.onOpenLook(lookInfo)

    expect($router.push).toHaveBeenCalledWith(lookInfo.path)
  })
})
