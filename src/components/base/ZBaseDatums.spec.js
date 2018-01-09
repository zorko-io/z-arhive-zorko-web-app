import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import ZBaseDatums from './ZBaseDatums.vue'
import ZBaseDatumsItem from './ZBaseDatumsItem.vue'

import mockDatums from '../../../static/__mocks__/datums.json'

describe('ZBaseDatums.vue', () => {
  let store
  let propsData

  beforeEach(() => {
    propsData = {
      items: mockDatums
    }
  })

  it('has proper amount of items', () => {
    const wrapper = shallow(ZBaseDatums, {
      store,
      propsData
    })
    const items = wrapper.findAll(ZBaseDatumsItem)

    expect(items.length).toEqual(2)
  })

  it('emits `datumInput`', () => {
    const wrapper = shallow(ZBaseDatums, {
      store,
      propsData
    })
    const {vm} = wrapper.find(ZBaseDatumsItem)

    vm.$emit('datumActivated', 'baz')

    expect(wrapper.emitted('datumInput')[0][0]).toEqual('baz')
  })

  it('has same HTML for looks', () => {
    const renderer = createRenderer()
    const homeWrapper = shallow(ZBaseDatums, {
      store,
      propsData
    })

    renderer.renderToString(homeWrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
