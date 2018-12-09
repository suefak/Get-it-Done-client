'use strict'


const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('my data is ' + data)
  // $(event.target).trigger('reset')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreatetodo = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // $(event.target).trigger('reset')
  api.Create(data)
    .then(ui.CreateSuccess)
    .catch(ui.CreateFailure)
}
const onIndextodo = event => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.index()
    .then(ui.IndexSuccess)
    .catch(ui.IndexFailure)
}
const onDeleteTodo = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.Delete(data.checklist_item.id)
    .then(ui.DeleteSuccess)
    .catch(ui.DeleteFailure)
}
const onUpdateTodo = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // $(event.target).trigger('reset')
  api.Update(data, data.checklist_item.id)
    .then(ui.UpdateSuccess)
    .catch(ui.UpdateFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatetodo,
  onIndextodo,
  onDeleteTodo,
  onUpdateTodo
}
