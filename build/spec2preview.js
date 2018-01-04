const {ls, echo, exec, exit, which} = require('shelljs')
const path = require('path')

if (!which('vl2svg')) {
  echo('Sorry, this script requires `vega` and `vega-lite` global installation ')
  exit(1);
}

ls('static/__mocks__/specs/*.json').forEach((file) => {
  let fileName = path.parse(file).name
  fileName = fileName.replace('.vl', '')

  exec(`vl2svg ${file}`).to(`static/__mocks__/previews/${fileName}.svg`)
})
