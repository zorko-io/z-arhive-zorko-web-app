import {mount} from 'vue-test-utils'
import Library from './Library.vue'

describe('Library.vue', () => {
  it('displays default message', () => {
    const wrapper = mount(Library)

    expect(wrapper.vm).toBeTruthy()
  })
})
