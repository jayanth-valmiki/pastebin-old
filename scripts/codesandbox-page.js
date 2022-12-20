const http = require('http')

const message = 'Its time to get yourself ready for ex288v46 with Raza the DevOps"

console.log(message)

http
  .createServer((req, res) => {
    res.write(message)
    res.end()
  })
  .listen(8080)
