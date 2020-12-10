const express = require('express')
const dataCtrl = require('./dataCtrl')
const app = express()

const SERVER_PORT = 31415

app.use(express.json())


//noteBook endpoints
app.get('/api/noteBook', dataCtrl.getItems)

app.delete('/api/noteBook/:note_id',dataCtrl.deleteItem)

app.post('/api/noteBook', dataCtrl.addItem)

app.put('/api/noteBook/:note_id',dataCtrl.editItem)


app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))