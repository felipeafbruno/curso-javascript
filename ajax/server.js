const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, resp) => console.log('Ok'))
app.listen(8080, () => console.log('Executando...'))


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, resp) => {
    upload(req, resp, err => {
        if(err) {
            return res.end('Ocorreu em erro.')
        }

        res.end('Concluído com sucesso.')
    })
})


app.post('/formulario', (req, resp) => {
    resp.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, resp) => {
    // Formas de receber dados na requisição
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 == 0
    resp.send({
        resultado: par ? 'par' : 'impar' 
    })
})