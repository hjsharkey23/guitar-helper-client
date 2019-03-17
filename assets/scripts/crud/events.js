'use strict'

const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateSong = function (event) {
  event.preventDefault()

  const data = getFormFields(this)

  api.create(data)
    .then(function () {
      ui.createSongSuccess()
      firstIndex()
    })
    .catch(ui.createSongFailure)
}

const onUpdateSong = function (event) {
  event.preventDefault()

  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)

  api.update(id, formData)
    .then(function () {
      ui.onUpdateSuccess(id)
      firstIndex()
    })
    .catch(ui.onUpdateFailure)
}

// const onGetSongs = function (event) {
//   event.preventDefault()
//   api.index()
//     .then(ui.onIndexSuccess)
//     .catch(ui.onError)
// }

const onGetUserSongs = function (event) {
  event.preventDefault()
  api.userIndex()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onDeleteSong = function (event) {
  event.preventDefault()

  const id = $(event.target).closest('section').data('id')

  api.destroy(id)
    .then(function () {
      ui.onDestroySuccess()
      firstIndex()
    })
    .catch(ui.errorMessage)
}

const onClearSongs = (event) => {
  event.preventDefault()
  ui.clearSongs()
  // .catch(ui.clearSongsFailure)
}

const firstIndex = () => {
  api.userIndex()
    .then(ui.onIndexSuccess)
    .catch(ui.errorMessage)
}
const addHandlers = () => {
  $('#create-song').on('submit', onCreateSong)
  $('#show-songs-button').on('submit', onGetUserSongs)
  // $('#song-update').on('submit', onUpdateSong)
  $('#content').on('submit', '.update-song-form', onUpdateSong)
  $('.content').on('click', '.delete-song', onDeleteSong)
  $('#clear-songs-button').on('submit', onClearSongs)
}

module.exports = {
  addHandlers,
  firstIndex
}
