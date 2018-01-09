import fs from 'fs'

const urlToPath = (url) => (`.${url}`)
const readJsonFile = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })
}

export default {
  async get (url) {
    const filePath = urlToPath(url)
    const fileContent = await readJsonFile(filePath)
    return {
      data: fileContent
    }
  }
}
