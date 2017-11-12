export default function exploreToNavigationItem (explore) {
  let result = {
    title: explore.title
  }

  if (explore.type === 'group') {
    result = Object.assign(result, {
      children: explore.children.map(exploreToNavigationItem)
    })
  } else {
    result = Object.assign(result, {
      path: '/explore/' + explore.id
    })
  }
  return result
}
