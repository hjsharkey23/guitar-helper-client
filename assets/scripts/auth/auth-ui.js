'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully, please sign in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const signUpFailure = function () {
  $('#message').text('Error on sign up, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
  store.user = data.user
  $('.login-page').hide()
  $('#sign-out-button').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-song').show()
  $('#song-update').show()
  $('#song-delete').show()
  $('#show-songs-button').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in, try again.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const signOutSuccess = function () {
  $('.login-page').show()
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('form').trigger('reset')
  $('input').trigger('reset')
  $('#sign-out-button').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#create-song').hide()
  $('#song-update').hide()
  $('#song-delete').hide()
  $('#show-songs-button').hide()
  $('#clear-songs-button').hide()
  $('#songs-display').html('')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
