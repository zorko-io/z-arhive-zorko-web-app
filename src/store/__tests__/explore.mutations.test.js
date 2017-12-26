import { setInitialData, toggleFieldSelection, toggleFilter, setFilterCondition, setFilterValue, setFields, applyFilters } from './../explore/mutations'
import setInitialState from './../explore/state'
import { makeCopy } from './../../utils'

describe('Explore tests', () => {
  it('It should set initial data to store', async () => {
    const state = setInitialState()
    const prevState = makeCopy(state)
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]

    prevState.initialData = data
    prevState.data = [{}, {}]
    setInitialData(state, data)

    expect(state).toEqual(prevState)
  })

  it('It should toggle field selection in store', async () => {
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

  it('It should toggle filter in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]
    setInitialData(state, data)

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
    state.fields = [ fieldOne, fieldTwo ]
    const prevState = makeCopy(state)
    const field = {
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention'
    }

    prevState.fields[0].filtered = true
    prevState.filters = [{
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention'
    }]
    toggleFilter(state, {field})
    expect(state).toEqual(prevState)
  })

  it('It should set filter condition in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]
    setInitialData(state, data)
    state.filters = [{
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention'
    }]
    const filter = {
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention'
    }
    const prevState = makeCopy(state)
    prevState.filters[0].condition = 'more than'
    const condition = 'more than'
    setFilterCondition(state, {filter, condition})
    expect(state).toEqual(prevState)
  })

  it('It should set filter value in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]
    setInitialData(state, data)
    state.filters = [{
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention',
      condition: 'more than'
    }]
    const filter = {
      filtered: false,
      selected: false,
      text: 'field_1',
      type: 'dimention'
    }
    const prevState = makeCopy(state)
    prevState.filters[0].value = 100
    const value = 100
    setFilterValue(state, {filter, value})
    expect(state).toEqual(prevState)
  })

  it('it should set fields to store', async () => {
    const state = setInitialState()
    const data = [{field_1: 'value_1_1', field_2: 100}, {field_1: 'value_1_2', field_2: 200}]
    setInitialData(state, data)
    const prevState = makeCopy(state)
    prevState.fields = [{
      text: 'field_1',
      type: 'dimention',
      selected: false,
      filtered: false }, {
      text: 'field_2',
      type: 'measure',
      selected: false,
      filtered: false}]
    setFields(state)

    expect(state).toEqual(prevState)
  })

  it('it should apply "equal to" filter and transform data in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    setInitialData(state, data)
    state.fields = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure'
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.filters = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure',
      condition: 'equal to',
      value: 100 // set condition with wrong value
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.spec = {
      data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
      encoding: {x: {field: 'field_1', type: 'ordinal'}},
      mark: 'tick'}
    applyFilters(state)
    expect(state.data).toEqual([])
  })

  it('it should apply "not equal to" filter and transform data in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    setInitialData(state, data)
    state.fields = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure'
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.filters = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure',
      condition: 'not equal to',
      value: 100 // set condition with wrong value
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.spec = {
      data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
      encoding: {x: {field: 'field_1', type: 'ordinal'}},
      mark: 'tick'}
    applyFilters(state)
    expect(state.data).toEqual(data)
  })

  it('it should apply "more than" filter and transform data in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    setInitialData(state, data)
    state.fields = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure'
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.filters = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure',
      condition: 'more than',
      value: 10 // set condition with wrong value
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.spec = {
      data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
      encoding: {x: {field: 'field_1', type: 'ordinal'}},
      mark: 'tick'}
    applyFilters(state)
    expect(state.data).toEqual([{field_1: 15, field_2: 200}])
  })

  it('it should apply "less than" filter and transform data in store', async () => {
    const state = setInitialState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    setInitialData(state, data)
    state.fields = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure'
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.filters = [{
      filtered: true,
      selected: true,
      text: 'field_1',
      type: 'measure',
      condition: 'less than',
      value: 15 // set condition with wrong value
    }, {
      filtered: false,
      selected: true,
      text: 'field_2',
      type: 'measure'
    }]
    state.spec = {
      data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
      encoding: {x: {field: 'field_1', type: 'ordinal'}},
      mark: 'tick'}
    applyFilters(state)
    expect(state.data).toEqual([{field_1: 10, field_2: 100}])
  })

})
