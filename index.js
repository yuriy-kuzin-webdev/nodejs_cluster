import express from 'express'

const app = express()
const PORT = 3000

app.get('/test', (req, res) => {
    let counter = 0;
    while(counter < 50_000_000) {counter++}
    res.send(`Counter ${counter}`)
})

app.listen(PORT, console.log(`On port: ${PORT}, Worker pid: ${process.pid}`))