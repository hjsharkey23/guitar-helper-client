'use strict'

const authEvents = require('./auth/auth-events.js')
const events = require('./crud/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.addHandlers()
  authEvents.addHandlers()
  $('.register-form').hide()
  $('#sign-out-button').hide()
  $('#change-password').hide()
  $('#create-song').hide()
  $('#song-update').hide()
  $('#song-delete').hide()
  $('#show-songs-button').hide()
  $('#clear-songs-button').hide()
})
