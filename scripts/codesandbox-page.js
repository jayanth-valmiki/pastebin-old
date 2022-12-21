const http = require('http')

const message = "Today is 21st December only 5 days left for exam so hit hard,Its time to get yourself ready for ex288v46 with Raza the DevOps"

console.log(message)

http
  .createServer((req, res) => {
    res.write(message)
    res.end()
  })
  .listen(8080)
