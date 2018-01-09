import {mount, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import ZBaseLooks from './ZBaseLooks.vue'
import ZBaseLooksItem from './ZBaseLooksItem.vue'
import mockLooks from '../../../static/__mocks__/looks.json'

describe('ZBaseLooks.vue', () => {
  let propsData

  it('shows proper amount of looks', () => {
    propsData = {
      items: mockLooks
    }
    const wrapper = shallow(ZBaseLooks, {
      propsData
    })
    const homeLooksPreviewWrappers = wrapper.findAll(ZBaseLooksItem)

    expect(homeLooksPreviewWrappers.length).toEqual(8)
  })

  it('emits `openLook`', () => {
    propsData = {
      items: mockLooks
    }
    const wrapper = shallow(ZBaseLooks, {
      propsData
    })
    const {vm} = wrapper.find(ZBaseLooksItem)

    vm.$emit('lookActivated', 'bazz')

    expect(wrapper.emitted('lookInput')[0][0]).toEqual('bazz')
  })

  it('pass title to subheader', () => {
    propsData = {
      title: 'Test'
    }
    const wrapper = mount(ZBaseLooks, {
      propsData
    })
    const title = wrapper.find('.js-ZBaseLooks-subheader').text()

    expect(title).toEqual(propsData.title)
  })

  it('changes route because look`s item `lookActivated` event', () => {
    propsData = {
      items: mockLooks
    }
    const lookInfo = {path: 'bazzz'}

    const $router = {
      push: jest.fn()
    }
    const wrapper = shallow(ZBaseLooks, {
      propsData,
      mocks: {
        $router
      }
    })
    const {vm} = wrapper.find(ZBaseLooksItem)

    vm.$emit('lookActivated', lookInfo)

    expect($router.push).toHaveBeenCalledWith(lookInfo.path)
  })

  it('emits `openDatum`', () => {
    propsData = {
      items: mockLooks
    }
    const wrapper = shallow(ZBaseLooks, {
      propsData
    })
    const {vm} = wrapper.find(ZBaseLooksItem)

    vm.$emit('datumActivated', 'baz')

    expect(wrapper.emitted('datumInput')[0][0]).toEqual('baz')
  })

  it('changes route because look`s item `datumActivated` event', () => {
    propsData = {
      items: mockLooks
    }
    const $router = {
      push: jest.fn()
    }
    const datumInfo = {
      name: 'baz'
    }
    const wrapper = shallow(ZBaseLooks, {
      propsData,
      mocks: {
        $router
      }
    })
    const {vm} = wrapper.find(ZBaseLooksItem)

    vm.$emit('datumActivated', datumInfo)

    expect($router.push).toHaveBeenCalledWith('/datums/baz')
  })

  it('has same HTML for looks', () => {
    const renderer = createRenderer()
    const homeWrapper = shallow(ZBaseLooks, {
      propsData
    })

    renderer.renderToString(homeWrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
