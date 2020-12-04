if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const result = require('dotenv').config()

  if (result.error) throw result.error
}

const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port', PORT)
  if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const envConfig = require('dotenv').config()
    if(envConfig.error) throw envConfig.error
  }
})


