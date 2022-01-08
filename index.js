const express = require('express')
const app = express()
const PORT = 3000

app.get('/test', (req,res) => {
    res.send('Hello world')
})

app.listen(PORT,() => console.log(`Example app listening at http://localhost:${PORT}`))