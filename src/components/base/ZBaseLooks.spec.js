import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import ZBaseLooks from './ZBaseLooks.vue'
import ZBaseLooksItem from './ZBaseLooksItem.vue'
import mockLooks from '../../../static/__mocks__/looks.json'

describe('ZBaseLooks.vue', () => {
  let store
  let propsData

  it('shows proper amount of looks', () => {
    propsData = {
      items: mockLooks
    }
    const wrapper = shallow(ZBaseLooks, {
      store,
      propsData
    })
    const homeLooksPreviewWrappers = wrapper.findAll(ZBaseLooksItem)

    expect(homeLooksPreviewWrappers.length).toEqual(5)
  })

  it('emits `openLook`', () => {
    propsData = {
      items: mockLooks
    }
    const wrapper = shallow(ZBaseLooks, {
      store,
      propsData
    })
    const {vm} = wrapper.find(ZBaseLooksItem)

    vm.$emit('lookActivated', 'bazz')

    expect(wrapper.emitted('lookInput')[0][0]).toEqual('bazz')
  })

  it('emits `openDatum`', () => {
    propsData = {
      items: mockLooks
    }
    const wrapper = shallow(ZBaseLooks, {
      store,
      propsData
    })
    const {vm} = wrapper.find(ZBaseLooksItem)

    vm.$emit('datumActivated', 'baz')

    expect(wrapper.emitted('datumInput')[0][0]).toEqual('baz')
  })

  it('has same HTML for looks', () => {
    const renderer = createRenderer()
    const homeWrapper = shallow(ZBaseLooks, {
      store,
      propsData
    })

    renderer.renderToString(homeWrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
