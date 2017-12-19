import {mount} from 'vue-test-utils'
import Admin from './Admin.vue'

describe('Admin.vue', () => {
  it('displays default message', () => {
    const wrapper = mount(Admin)
    let block = wrapper.find('.js-block-message')
    expect(block.text()).toContain('I`m an admin')
  })
})
