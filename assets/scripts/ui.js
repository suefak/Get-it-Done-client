'use strict'

const store = require('./store.js')
const magic = require('./magic.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()
  $('#message').text('Signed up successfully')
$('#message').removeClass()
$('#message').addClass('success')
// $('#signupemail').val('')
// $('#signuppassword').val('')
// $('#signuppasswordconfirm').val('')
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  store.user = data.user
  magic.signInDone()
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('#sign-in')[0].reset()
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  $('#change-password')[0].reset()
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  $('#change-password')[0].reset()
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  magic.signOutDone()
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
  $('#sign-out')[0].reset()
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  $('#sign-out')[0].empty()
}

const CreateSuccess = data => {
  $('#message').text('created to do list successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up')[0].reset()

$('#signupemail').val('')
$('#signuppassword').val('')
$('#signuppasswordconfirm').val('')
}

const CreateFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('createFailure ran. Error is :', error)
  // $('#sign-up')[0].reset()
}

const IndexSuccess = data => {
  store.user = data.user
  $('#message').text('Index successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('IndexSuccess ran. Data is :', data)
  data.checklist_items.forEach(checklist_item => {
    $('.output').append(`
        <div class=${checklist_item.id}>
        <h4 id=${checklist_item.id}>${checklist_item.id}</h4>
        </div>`)
    for (const key in checklist_item) {
      if (key !== 'id') {
        $(`.${checklist_item.id}`).append(`<h6>${key}: ${checklist_item[key]}</h6>`)
      }
    }
  })
  // $('#sign-in')[0].reset()
}

const IndexFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('IndexFailure ran. Error is :', error)
  // $('#sign-in')[0].reset()
}

const DeleteSuccess = data => {
  $('#message').text('Deleted successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Delete Success ran. Data is :', data)
  // $('#change-password')[0].reset()
}

const DeleteFailure = error => {
  $('#message').text('Error on Delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('deleteFailure ran. Error is :', error)
  // $('#change-password')[0].reset()
}

const UpdateSuccess = data => {
  $('#message').text('Updated successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('updateSuccess ran. Data is :', data)
  // $('#sign-out')[0].reset()
}

const UpdateFailure = error => {
  $('#message').text('Error on update')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('updateFailure ran. Error is :', error)
  // $('#sign-out')[0].empty()
}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  CreateSuccess,
  CreateFailure,
  IndexSuccess,
  IndexFailure,
  DeleteSuccess,
  DeleteFailure,
  UpdateSuccess,
  UpdateFailure
}
