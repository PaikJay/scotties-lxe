var axios = require("axios").default;

module.exports = async function (config) {
  try {
    const r = await axios(config);
    return `${r.status} (${r.statusText}) emails remaining: ${r.headers['x-ratelimit-emails-remaining']}`
  }
  catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.status, error.response.data.message)
      console.log('Response', error.response.headers)
      console.log('Request', error.config)
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(error)
    }
  }
}
