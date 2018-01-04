import {mount} from 'vue-test-utils'
import HomeLooksPreview from './HomeLooksPreview.vue'

describe('HomeLooksPreview.vue', () => {
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

  it('can initialize', () => {
    const wrapper = mount(HomeLooksPreview, {
      propsData: defaultProps
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('should emmit `openLook` when click on title', () => {
    const wrapper = mount(HomeLooksPreview, {
      propsData: defaultProps
    })

    wrapper.find('.js-HomeLooksPreview-title-parent').trigger('click')

    expect(wrapper.emitted('openLook')[0][0]).toEqual({
      title: defaultProps.title,
      path: defaultProps.path
    })
  })

  it('should emmit `openLook` when click on image', () => {
    const wrapper = mount(HomeLooksPreview, {
      propsData: defaultProps
    })

    wrapper.find('.js-HomeLooksPreview-image').trigger('click')

    expect(wrapper.emitted('openLook')[0][0]).toEqual({
      title: defaultProps.title,
      path: defaultProps.path

    })
  })
})
