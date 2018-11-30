'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./events.js')
const magic = require('./magic.js')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#Add').on('submit', authEvents.onCreatetodo)
  $('.Edit').on('submit', authEvents.onUpdateTodo)
  $('.Delete').on('submit', authEvents.onDeleteTodo)
  $('.Index').on('submit', authEvents.onIndextodo)
  $(document).ready(magic.signOutDone)
})


// $('#Edit').on('submit', authEvents.onDeleteTodo)
// $('#Delete').on('submit', authEvents.onChangePassword)
