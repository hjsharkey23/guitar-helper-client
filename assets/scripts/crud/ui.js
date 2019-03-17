'use strict'

const store = require('../store.js')
const showSongsTemplate = require('../templates/song-listing.handlebars')

const createSongSuccess = function (data) {
  $('#songs-display').text('')
  $('#show-songs-button').show()
  $('#clear-songs-button').hide()
  $('#message').text('Created song successfully.')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
  store.song = data.song
}

const createSongFailure = function () {
  $('#message').text('Failed to create a song, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onIndexSuccess = function (data) {
  clearSongs()
  // $('#songs-display').html(`Songs: ${JSON.stringify(data)}`)
  // if ($('#songs-display').html() === 'Songs: {"songs":[]}') {
  //   $('#songs-display').html('No songs yet. Make one!')
  // }
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').append(showSongsHtml)
  $('#show-songs-button').hide()
  $('#clear-songs-button').show()
  $('.content').show()
}

const onFirstIndexSuccess = function (data) {
  clearSongs()
  // $('#songs-display').html(`Songs: ${JSON.stringify(data)}`)
  // if ($('#songs-display').html() === 'Songs: {"songs":[]}') {
  //   $('#songs-display').html('No songs yet. Make one!')
  // }
  const showSongsHtml = showSongsTemplate({ songs: data.songs })
  $('.content').append(showSongsHtml)
  $('#show-songs-button').hide()
  $('#clear-songs-button').show()
  $('.content').show()
}

// const onIndexEmpty = function () {
//   $('#message').text('Failed to get songs, try again.')
// }

const onIndexFailure = function () {
  $('#message').text('No songs to display')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#songs-display').text('')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onUpdateSuccess = function () {
  $('#songs-display').text('')
  $('#show-songs-button').show()
  $('#clear-songs-button').hide()
  $('#message').text('Song successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onUpdateFailure = function () {
  $('#message').text('Error on updating song')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onDestroySuccess = function () {
  // $('#songs-display').text('')
  $('#show-songs-button').show()
  $('#clear-songs-button').hide()
  // $('#message').text('Song successfully deleted')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  // $('form').trigger('reset')
  // $('input').trigger('reset')
  // setTimeout(() => {
  //   $('#message').text('')
  // }, 3000)
}

const onDestroyFailure = function () {
  $('#message').text('Error on deleting song')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const clearSongs = () => {
  $('.content').empty()
  $('#clear-songs-button').hide()
  $('#show-songs-button').show()
}

const clearSongsFailure = () => {
  $('#message').text('Songs already cleared')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

module.exports = {
  createSongSuccess,
  createSongFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onDestroySuccess,
  onDestroyFailure,
  clearSongs,
  clearSongsFailure,
  onFirstIndexSuccess
}
