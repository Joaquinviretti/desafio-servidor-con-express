const express = require('express')
const Contenedor = require('./contenedor')

const app = express()
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor. ${error}`))

const contenedor = new Contenedor("productos.txt");

    app.get("/", (req, res) => {
        res.send('Hola mundo')
    })

app.get("/productos", (req, res) => {
    contenedor.getAll().then(productos => {
        res.send(productos)
        console.log(productos)
    })
})

app.get("/productoRandom", (req, res) => {
    contenedor.getAll().then(productos => {
        res.send(productos.find(p => p.id == Math.floor(Math.random() * productos.length) + 1))

    })
})