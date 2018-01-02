import * as mutations from './mutations'
import createState from './state'
import {makeCopy} from '../../utils/index'

describe('Explore Mutations', () => {
  it('set initial data', async () => {
    const state = createState()
    const prevState = makeCopy(state)
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]

    prevState.initialData = data
    prevState.data = [{}, {}]

    mutations.setInitialData(state, data)

    expect(state).toEqual(prevState)
  })

  it('toggle field selection', async () => {
    const state = createState()
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

    mutations.setInitialData(state, data)
    state.fields = [ fieldOne, fieldTwo ]
    state.data = [{}, {}]

    prevState.fields = [ fieldOne, fieldTwo ]
    prevState.data = [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]
    prevState.initialData = data
    prevState.spec = {
      data: {values: [{field_1: 'value_1_1'}, {field_1: 'value_1_2'}]},
      encoding: {x: {field: 'field_1', type: 'ordinal'}},
      mark: 'tick'}

    mutations.toggleFieldSelection(state, {field})

    expect(state).toEqual(prevState)
  })

  it('toggle filter', async () => {
    const state = createState()
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]
    mutations.setInitialData(state, data)

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

    mutations.toggleFilter(state, {field})

    expect(state).toEqual(prevState)
  })

  it('set filter condition', async () => {
    const state = createState()
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]
    mutations.setInitialData(state, data)
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

    mutations.setFilterCondition(state, {filter, condition})

    expect(state).toEqual(prevState)
  })

  it('set filter value', async () => {
    const state = createState()
    const data = [{field_1: 'value_1_1', field_2: 'value_2_1'}, {field_1: 'value_1_2', field_2: 'value_2_2'}]
    mutations.setInitialData(state, data)
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

    mutations.setFilterValue(state, {filter, value})

    expect(state).toEqual(prevState)
  })

  it('set fields', async () => {
    const state = createState()
    const data = [{field_1: 'value_1_1', field_2: 100}, {field_1: 'value_1_2', field_2: 200}]
    mutations.setInitialData(state, data)
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

    mutations.setFields(state)

    expect(state).toEqual(prevState)
  })

  it('applies "equal to" filter and transforms data', async () => {
    const state = createState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    mutations.setInitialData(state, data)
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

    mutations.applyFilters(state)

    expect(state.data).toEqual([])
  })

  it('applies "not equal to" filter and transforms data', async () => {
    const state = createState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    mutations.setInitialData(state, data)
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

    mutations.applyFilters(state)

    expect(state.data).toEqual(data)
  })

  it('applies "more than" filter and transforms data', async () => {
    const state = createState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    mutations.setInitialData(state, data)
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

    mutations.applyFilters(state)

    expect(state.data).toEqual([{field_1: 15, field_2: 200}])
  })

  it('applies "less than" filter and transforms data', async () => {
    const state = createState()
    const data = [{field_1: 10, field_2: 100}, {field_1: 15, field_2: 200}]
    mutations.setInitialData(state, data)
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

    mutations.applyFilters(state)

    expect(state.data).toEqual([{field_1: 10, field_2: 100}])
  })
})
