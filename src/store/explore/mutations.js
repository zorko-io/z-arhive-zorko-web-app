import * as R from 'ramda'
import Spec from '@/model/Spec'
import {FILTER_VALUES} from '@/constants'

const equalByText = (text) => R.compose(R.equals(text), R.prop('text'))
const findFilterByText = (byText, filters) => filters.find(({text}) => (byText === text))

export const setInitialData = (state, data) => {
  state.initialData = data
  // state.data = data.map((item) => { return {} })
}

export const initExploreByLook = (state, look) => {
  state.initialData = look.initialData
  state.data = look.data
  state.filters = look.filters
  state.spec = look.spec

  setFields(state)

  state.fields.forEach((field) => {
    const anyFieldUsedInLook = look.fields.some(
      (lookField) => (lookField.text === field.text)
    )
    if (anyFieldUsedInLook) {
      field.selected = true
    }
  })
}

export const toggleFieldSelection = (state, {field}) => {
  let fields = state.fields
  const stateField = fields.find(equalByText(field.text))
  const key = field.text
  let spec = Spec.of(state.spec)

  stateField.selected = !field.selected
  if (field.selected) {
    state.initialData.forEach((record, index) => {
      state.data[index][key] = record[key]
    })

    spec = spec.encodeField(field)
  } else {
    state.initialData.forEach((record, index) => {
      delete state.data[index][key]
    })

    spec = spec.decodeField(field)
  }

  state.spec = spec.value()

  state.spec.data.values = JSON.parse(
    JSON.stringify(state.data)
  )
}

export const toggleFilter = (state, {field}) => {
  const shouldRemoveFilter = field.filtered
  const stateField = state.fields.find(equalByText(field.text))

  if (shouldRemoveFilter) {
    const filterIndex = state.filters.findIndex(equalByText(field.text))
    state.filters.splice(filterIndex, 1)
    stateField.filtered = false
  } else {
    state.filters.push({
      text: field.text,
      type: field.type,
      filtered: field.filtered,
      selected: field.selected
    })
    stateField.filtered = true
  }
}

export const setFilterCondition = ({filters}, {filter, condition}) => {
  const targetFilter = findFilterByText(filter.text, filters)
  targetFilter.condition = condition
}

export const setFilterValue = ({filters}, {filter, value}) => {
  const targetFilter = findFilterByText(filter.text, filters)
  targetFilter.value = value
}

export const setFields = (state) => {
  let firstDataItem = state.initialData[0]
  let fields = []
  if (firstDataItem) {
    const firstDataItemKeys = Object.keys(firstDataItem)
    const isNumber = (key) => (typeof firstDataItem[key] === 'number')

    fields = firstDataItemKeys.map((key) => ({
      text: key,
      type: isNumber(key) ? 'measure' : 'dimention',
      selected: false,
      filtered: false
    }))
  }

  state.fields = fields
}

export const applyFilters = (state, payload) => {
  const selectedFields = state.fields.filter((field) => (field.selected))
  const setDataBySelectedFields = (state) => {
    return state.initialData.map((item) => {
      const selectedKeys = selectedFields.map((field) => (field.text))
      return selectedKeys.reduce((memo, key) => {
        memo[key] = item[key]
        return memo
      }, {})
    })
  }

  let data = setDataBySelectedFields(state)

  state.filters.forEach(filter => {
    if (filter.type === 'measure') {
      filter.value = Number(filter.value)
    }
    data = data.filter(item => {
      switch (filter.condition) {
        case FILTER_VALUES.EQUAL_TO:
          return filter.value ? item[filter.text] === filter.value : true
        case FILTER_VALUES.NOT_EQUAL_TO:
          return filter.value ? item[filter.text] !== filter.value : true
        case FILTER_VALUES.MORE_THAN:
          return filter.value ? item[filter.text] > filter.value : true
        case FILTER_VALUES.LESS_THAN:
          return filter.value ? item[filter.text] < filter.value : true
        default:
          return true
      }
    })
  })

  state.data = data

  state.spec.data.values = JSON.parse(
    JSON.stringify(state.data)
  )
}
