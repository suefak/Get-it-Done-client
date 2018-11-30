const signInDone = () => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('.formOne').show()
  $('.formTwo').show()
}
const signOutDone = () => {
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.formOne').hide()
  $('.formTwo').hide()
}

module.exports = {
  signInDone,
  signOutDone
}
