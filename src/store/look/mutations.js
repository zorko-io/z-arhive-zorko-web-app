export const initLook = async (state, look) => {
  state.name = look.name
  state.fields = look.fields
  state.filters = look.filters
  state.data = look.data
  state.spec = look.spec
  state.initialData = look.initialData
}
