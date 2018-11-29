'use strict'

const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}

const Create = data => {
  return $.ajax({
    url: config.apiUrl + '/checklist_items',
    method: 'POST',
    data
  })
}

const Index = data => {
  return $.ajax({
    url: config.apiUrl + '/checklist_items',
    method: 'GET',
    data
  })
}

const Show = data => {
  return $.ajax({
    url: config.apiUrl + '/checklist_items/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const Delete = data => {
  return $.ajax({
    url: config.apiUrl + '/checklist_items/:id',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const Update = () => {
  return $.ajax({
    url: config.apiUrl + '/checklist_items/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  Create,
  Index,
  Show,
  Delete,
  Update
}
