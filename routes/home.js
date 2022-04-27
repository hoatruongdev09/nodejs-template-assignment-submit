const express = require('express')
const Routes = express.Router()

Routes.get('', (req, res) => {
    res.render('home.ejs', { pageTitle: 'Home', path: '/' })
})

module.exports = Routes