const env = process.env.NODE_ENV

const local = {
  baseUrl: 'http://localhost:3000/power-day',
  apiUri: 'http://localhost:4000/card'
}

const production = {
  apiUri: 'https://afternoon-plains-45617.herokuapp.com/card'
}

module.exports = env === 'production' ? production : local
