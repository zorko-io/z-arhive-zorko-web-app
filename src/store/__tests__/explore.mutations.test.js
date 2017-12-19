import { setInitialData, toggleFieldSelection } from './../explore/mutations'
import setInitialState from './../explore/state'
import { makeCopy } from './../../utils'

describe('Explore tests', () => {
  it('It should set initial data to store', async () => {
    const state = setInitialState()
    const prevState = makeCopy(state)
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]

    prevState.initialData = data
    setInitialData(state, data)

    expect(state).toEqual(prevState)
  })

  it('It should set initial data to store', async () => {
    const state = setInitialState()
    const prevState = makeCopy(state)
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]

    const fieldOne = {
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention'
    }
    const fieldTwo = {
      filtered: false,
      selected: false,
      text: 'field_2',
      type: 'dimention'
    }
    const field = {
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'dimention'
    }

    setInitialData(state, data)
    state.fields = [ fieldOne, fieldTwo ]
    state.data = [{}, {}]

    prevState.fields = [ fieldOne, fieldTwo ]
    prevState.data = [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]
    prevState.initialData = data
    prevState.spec = {
      data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
      encoding: {x: {field: 'field_1', type: 'ordinal'}},
      mark: 'tick'}
    toggleFieldSelection(state, {field})
    expect(state).toEqual(prevState)
  })
})
