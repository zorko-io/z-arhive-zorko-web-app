import {mount, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import ZBaseLooksItem from './ZBaseLooksItem.vue'

describe('ZBaseLooksItem.vue', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      src: 'url/to/image.png',
      title: 'Look Title',
      path: 'path to look',
      author: {
        login: 'foo',
        avatar: 'foo/baz.png'
      },
      datum: {
        name: 'ddd'
      }
    }
  })

  it('initialize', () => {
    const wrapper = mount(ZBaseLooksItem, {
      propsData: defaultProps
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('emits `openLook` when click on title', () => {
    const wrapper = mount(ZBaseLooksItem, {
      propsData: defaultProps
    })

    wrapper.find('.js-ZBaseLooksItem-title-parent').trigger('click')

    expect(wrapper.emitted('lookActivated')[0][0]).toEqual({
      title: defaultProps.title,
      path: defaultProps.path
    })
  })

  it('emits `openLook` when click on image', () => {
    const wrapper = mount(ZBaseLooksItem, {
      propsData: defaultProps
    })

    wrapper.find('.js-ZBaseLooksItem-image').trigger('click')

    expect(wrapper.emitted('lookActivated')[0][0]).toEqual({
      title: defaultProps.title,
      path: defaultProps.path

    })
  })

  it('emits `openDatum` when click in datum', () => {
    const wrapper = mount(ZBaseLooksItem, {
      propsData: defaultProps
    })

    wrapper.find('.js-ZBaseLooksItem-datum').trigger('click')

    expect(wrapper.emitted('datumActivated')[0][0]).toEqual({
      name: defaultProps.datum.name
    })
  })

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = shallow(ZBaseLooksItem, {
      propsData: defaultProps
    })

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
