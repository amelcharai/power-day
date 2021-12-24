const baseUrl = {
  'local': 'http://localhost:3000',
  'github': 'https://amelcharai.github.io'
};

export function getBaseUrl () {
  return baseUrl[`${process.env.NODE_ENV}`] || baseUrl['local']
}
