
const store = require('../store.js')

const createSongSuccess = function (data) {
  $('#message').text('Created song successfully.')
  $('#message').removeClass()
  $('#message').addClass('success')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
  store.song = data.song
}

const createSongFailure = function () {
  $('#message').text('Failed to create a song, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onIndexSuccess = function (responseData) {
  console.log(responseData)
  $('#songs-display').html(`Songs: ${JSON.stringify(responseData)}`)
}

const onIndexFailure = function () {
  $('#message').text('Failed to get songs, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onUpdateSuccess = function () {
  $('#message').text('Song successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Example successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error on updating song')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Song successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Example successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error on deleting song')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

module.exports = {
  createSongSuccess,
  createSongFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onDestroySuccess,
  onDestroyFailure
}
