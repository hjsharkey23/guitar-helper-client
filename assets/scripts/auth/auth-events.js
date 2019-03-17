'use strict'

const getFormFields = require(`../../../lib/get-form-fields.js`)

const api = require('./auth-api.js')
const ui = require('./auth-ui.js')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSwitchToSignUp = function (event) {
  event.preventDefault()
  $('.login-form').hide()
  $('.register-form').show()
}

const onSwitchToSignIn = function (event) {
  event.preventDefault()
  $('.login-form').show()
  $('.register-form').hide()
}

const addHandlers = () => {
  $('.register-form').on('submit', onSignUp)
  $('.login-form').on('submit', onSignIn)
  $('#sign-out-button').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create-an-account').on('click', onSwitchToSignUp)
  $('#sign-in-switch').on('click', onSwitchToSignIn)
}

module.exports = {
  addHandlers
}
