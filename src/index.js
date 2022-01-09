const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const path = require('path');

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
// HTTP Logger
app.use(morgan('tiny'))

// Template Engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log("__dirname::", __dirname)
console.log("PATH JOIN.__dirname::", path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/news', (req, res) => {
    res.render('news')
})
//dsddsa
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))