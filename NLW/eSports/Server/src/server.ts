import express from 'express'

const app = express();

app.get('/', (request,response) => {
    return response.json([
        {id: 1, name: 'Anuncio 01'},
        {id: 2, name: 'Anuncio 02'},
        {id: 3, name: 'Anuncio 03'},
        {id: 4, name: 'Anuncio 04'},
        {id: 5, name: 'Anuncio 05'},
        {id: 6, name: 'Anuncio 06'},
    ])
})

app.listen(3333)