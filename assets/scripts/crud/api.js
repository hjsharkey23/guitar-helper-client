'use strict'

const config = require('../config.js')
const store = require('../store')

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/songs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  create
}
