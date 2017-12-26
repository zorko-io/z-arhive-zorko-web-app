import { initLook } from './../look/mutations'
import setInitialState from './../explore/state'

describe('Explore tests', () => {
  it('It should set look data to store', async () => {
    const state = setInitialState()
    const look = {
      name: 'New look',
      fields: [{
        filtered: false,
        selected: false,
        text: 'field_1',
        type: 'measure'
      }, {
        filtered: false,
        selected: false,
        text: 'field_2',
        type: 'measure'
      }],
      filters: [{
        filtered: false,
        selected: false,
        text: 'field_1',
        type: 'measure'
      }, {
        filtered: false,
        selected: false,
        text: 'field_2',
        type: 'measure'
      }],
      data: [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}],
      spec: {
        data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
        encoding: {x: {field: 'field_1', type: 'ordinal'}},
        mark: 'tick'},
      initialData: [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    }
    const newState = {
      name: look.name,
      fields: look.fields,
      filters: look.filters,
      data: look.data,
      spec: look.spec,
      initialData: look.initialData
    }
    initLook(state, look)
    expect(state).toEqual(newState)
  })
})
