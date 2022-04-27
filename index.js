const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({ extended: true }))

const homeRoutes = require('./routes/home')
const usersRoutes = require('./routes/users')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/users', usersRoutes)
app.use(homeRoutes)

app.use((req, res, next) => {
    res.render("404", { pageTitle: 'Page not found' })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`app listen on port: ${port}`)
})