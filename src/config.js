const env = process.env.REACT_APP_API_ENV

const local = {
  baseUrl: 'http://localhost:3000/power-day',
  apiUri: 'http://localhost:4000'
}

const production = {
  apiUri: 'https://afternoon-plains-45617.herokuapp.com'
}

module.exports = env === 'production' ? production : local
