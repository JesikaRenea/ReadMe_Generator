const axios = require("axios");

const api = {
  getUser(username) {
    return axios.get(`https://api.github.com/users/${username}`)

  }
};

module.exports = api;
