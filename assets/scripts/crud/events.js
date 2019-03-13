'use strict'

const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateSong = function () {
  event.preventDefault()
  const data = getFormFields(this)
  const song = data.song

  if (song.title === '') {
    $('#message').html('<p>Title is required!</p>')
    $('#message').css('background-color', 'red')
    console.log('Title is required!')
    return false
  } else {
    api.create(data)
      .then(ui.createSongSuccess)
      .catch(ui.createSongFailure)
  }
}

const onGetSongs = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}

const onUpdateSong = function (event) {
  event.preventDefault()
  console.log('onUpdateExample ran!')

  const data = getFormFields(event.target)
  const song = data.song

  if (song.title === '') {
    $('#message').html('<p>Title is required!</p>')
    $('#message').css('background-color', 'red')
    console.log('Title is required!')
    return false
  }
  if (song.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide a song id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a song id!')
  }
}

const onDeleteSong = function (event) {
  event.preventDefault()
  console.log('onDeleteSong ran!')

  const data = getFormFields(event.target)
  const song = data.song

  if (song.id.length !== 0) {
    api.destroy(song.id)
      .then(ui.onDestroySuccess)
      .catch(ui.onDestroyFailure)
  } else {
    $('#message').html('<p>Please provide a song id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide a sonf id!')
  }
}

const addHandlers = () => {
  $('#create-song').on('submit', onCreateSong)
  $('#show-songs-button').on('submit', onGetSongs)
  $('#song-update').on('submit', onUpdateSong)
  $('#song-delete').on('submit', onDeleteSong)
}

module.exports = {
  addHandlers
}
