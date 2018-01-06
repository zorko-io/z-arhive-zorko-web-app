import {mount, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
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

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = shallow(DatumFieldsPanel, {
      propsData: defaultProps
    })

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
