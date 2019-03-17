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

const index = function () {
  return $.ajax({
    url: config.apiUrl + `/songs`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const userIndex = function () {
  return $.ajax({
    url: config.apiUrl + `/user-songs`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + `/songs/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/songs/' + data.song.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  create,
  index,
  destroy,
  update,
  userIndex
}
