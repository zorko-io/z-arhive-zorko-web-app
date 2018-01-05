import {mount} from 'vue-test-utils'
import DatumFieldsPanel from './DatumFieldsPanel.vue'

describe('DatumFieldsPanel.vue', () => {
  let defaultProps

  beforeEach(() => {
    defaultProps = {
      fields: [
        {
          'text': 'Name'
        },
        {
          'text': 'Miles_per_Gallon'
        },
        {
          'text': 'Cylinders'
        }
      ]
    }
  })

  it('can initialize', () => {
    const wrapper = mount(DatumFieldsPanel, {
      propsData: defaultProps
    })

    expect(wrapper.vm).toBeTruthy()
  })
})
