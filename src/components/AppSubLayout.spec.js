import {mount} from 'vue-test-utils'
import AppSubLayout from './AppSubLayout.vue'

describe('AppSubLayout.vue', () => {
  it('displays default message', () => {
    const wrapper = mount(AppSubLayout)

    wrapper.setProps({title: 'Test'})
    let title = wrapper.find('.js-AppSubLayout-title')
    expect(title.text()).toContain('Test')
  })
})
