const http = require('http')

const message = 'Go ahead  for next task as you finished the task successfully with Great Ahmed Shah. '

console.log(message)

http
  .createServer((req, res) => {
    res.write(message)
    res.end()
  })
  .listen(8080)
