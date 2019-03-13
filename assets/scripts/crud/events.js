'use strict'

const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateSong = function () {
  event.preventDefault()
  const data = getFormFields(this)
  api.create(data)
    .then(ui.createSongSuccess)
    .catch(ui.createSongFailure)
}

const addHandlers = () => {
  $('#create-song').on('submit', onCreateSong)
}

module.exports = {
  addHandlers
}
