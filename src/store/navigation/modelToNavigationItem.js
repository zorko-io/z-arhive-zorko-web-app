export default (model) => {
  return {
    title: model.name,
    path: '/model/' + model.name
  }
}
