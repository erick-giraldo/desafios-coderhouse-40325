import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (_, res) => {
  res.render('home')
})

app.get('/products', (_, res) => {
  const product = {
    nombre: 'Servicios informáticos',
    descripcion: 'Brindamos el mejor servicio de la ciudad.',
    precio: 20000,
    imagen: '/imgs/imagen.png',
  }
  res.render('products', product)
})

app.get('/users', (_, res) => {
  const users = [
    {
      "nombre": "Pablo",
      "edad": 25,
    },
    {
      "nombre": "Juan",
      "edad": 22,
    },
    {
      "nombre": "Lucia",
      "edad": 25,
    },
    {
      "nombre": "Juan",
      "edad": 29,
    },
    {
      "nombre": "Fede",
      "edad": 35,
    },
  ]
  res.render('users', { users, isEmpty: !users.length })
})

export default app
