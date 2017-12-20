import {mount} from 'vue-test-utils'
import LibraryLook from './LibraryLook.vue'

describe('LibraryLook.vue', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      src: 'url/to/image.png',
      title: 'Look Title',
      path: 'path to look'
    }
  })

  it('can initialize', () => {
    const wrapper = mount(LibraryLook)

    expect(wrapper.vm).toBeTruthy()
  })

  it('should emmit `openLook` when click on title', () => {
    const wrapper = mount(LibraryLook, {
      propsData: defaultProps
    })

    wrapper.find('.js-LibraryLook-title-parent').trigger('click')

    expect(wrapper.emitted('openLook')[0][0]).toEqual({
      title: defaultProps.title,
      path: defaultProps.path
    })
  })

  it('should emmit `openLook` when click on image', () => {
    const wrapper = mount(LibraryLook, {
      propsData: defaultProps
    })

    wrapper.find('.js-LibraryLook-image').trigger('click')

    expect(wrapper.emitted('openLook')[0][0]).toEqual({
      title: defaultProps.title,
      path: defaultProps.path

    })
  })
})
