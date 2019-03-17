'use strict'

const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateSong = function () {
  event.preventDefault()
  firstIndex()
  const data = getFormFields(this)
  const song = data.song

  if (song.title === '') {
    $('#message').html('<p>Title is required!</p>')
    $('#message').css('background-color', 'red')
    $('form').trigger('reset')
    $('input').trigger('reset')
    setTimeout(() => {
      $('#message').text('')
    }, 3000)
    return false
  } else {
    api.create(data)
      .then(ui.createSongSuccess)
      .catch(ui.createSongFailure)
  }
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

const onUpdateSong = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  const song = data.song

  if (song.title === '') {
    $('#message').html('<p>Title is required!</p>')
    $('#message').css('background-color', 'red')
    $('form').trigger('reset')
    $('input').trigger('reset')
    setTimeout(() => {
      $('#message').text('')
    }, 3000)
    return false
  }
  if (song.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a song id!</p>')
    $('#message').css('background-color', 'red')
    $('form').trigger('reset')
    $('input').trigger('reset')
    setTimeout(() => {
      $('#message').text('')
    }, 3000)
  }
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
    .then(ui.onFirstIndexSuccess)
    .catch(ui.errorMessage)
}
const addHandlers = () => {
  $('#create-song').on('submit', onCreateSong)
  $('#show-songs-button').on('submit', onGetUserSongs)
  $('#song-update').on('submit', onUpdateSong)
  $('.content').on('click', '.delete-song', onDeleteSong)
  $('#clear-songs-button').on('submit', onClearSongs)
}

module.exports = {
  addHandlers,
  firstIndex
}
