import {mount, shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'
import ZDatumFieldsPanel from './ZDatumFieldsPanel.vue'

describe('ZDatumFieldsPanel.vue', () => {
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
    const wrapper = mount(ZDatumFieldsPanel, {
      propsData: defaultProps
    })

    expect(wrapper.vm).toBeTruthy()
  })

  it('has same HTML structure', () => {
    const renderer = createRenderer()
    const wrapper = shallow(ZDatumFieldsPanel, {
      propsData: defaultProps
    })

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
