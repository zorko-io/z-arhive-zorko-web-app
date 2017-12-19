export const dimentions = (state) => {
  return state.fields.filter((field) => (field.type === 'dimention'))
}

export const measures = (state) => {
  return state.fields.filter((field) => (field.type === 'measure'))
}

export const selectedFields = (state) => {
  return state.fields.filter((field) => (field.selected))
}

