const express = require('express')
const cors = require('cors')

const bd = require('./src/data/sqlite-bd')
const port = 3000
const app = express()
const port = process.env.PORT

const dogsController =require('./src/controllers/dogsControllers')

app.use(express.json())
app.use(cors())

dogsController(app,bd)
app.listen(port, ()=> console.log(`[INFO] Servidor rodando na porta: ${port}
Acessar http://localhost:${port}`)

);