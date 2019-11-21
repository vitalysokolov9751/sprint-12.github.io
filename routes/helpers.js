const fs = require('fs');
const readDataFromFile = function (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        throw reject(err)
      }
      resolve(data)
    })
  })
}
module.exports = readDataFromFile;