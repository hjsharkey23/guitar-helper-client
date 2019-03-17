'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#sign-up-message').text('Signed up successfully, please sign in!')
  $('#sign-up-message').removeClass()
  $('#sign-up-message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#sign-up-message').text('')
  }, 3000)
}

const signUpFailure = function () {
  $('#sign-up-message').text('Error on sign up, try again.')
  $('#sign-up-message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#sign-up-message').text('')
  }, 3000)
}

const signInSuccess = function (data) {
  $('#sign-in-message').text('Signed in successfully')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('success')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('')
  }, 3000)
  store.user = data.user
  $('.login-page').hide()
  $('#dropdownMenuButton').show()
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#create-song').show()
  $('#song-update').show()
  $('#song-delete').show()
  $('#show-songs-button').show()
}

const signInFailure = function () {
  $('#sign-in-message').text('Error on sign in, try again.')
  $('#sign-in-message').removeClass()
  $('#sign-in-message').addClass('failure')
  $('form').trigger('reset')
  $('input').trigger('reset')
  setTimeout(() => {
    $('#sign-in-message').text('')
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
  $('#dropdownMenuButton').hide()
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
