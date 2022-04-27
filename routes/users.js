const express = require('express')
const Routes = express.Router()

const users = []

Routes.get('/', (req, res) => {
    res.render('users', { pageTitle: 'User', usernames: users, path: '/users' })
})

Routes.post('/', (req, res) => {
    const { username } = req.body
    users.push(username)
    res.redirect('/users')
})

module.exports = Routes