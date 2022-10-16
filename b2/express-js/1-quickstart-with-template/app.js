import express from 'express'

const app = express()

/**
 * Configuration
 */
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('static'))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/**
 * Some example data
 */
const cities = [
  {
      name: "Londres",
      country: "Angleterre"
  },
  {
      name: "Paris",
      country: "France"
  },
  {
      name: "Helsinki",
      country: "Finlande"
  }
]

/**
 * Home page
 */
app.get('/', (req, res) => {
  res.render('index', { firstname: "Luke", cities })
})

/**
 * About page
 */
app.get('/a-propos', (req, res) => {
  res.render('a-propos')
})

/**
 * Form page
 */
app.post('/send', (req, res) => {
  console.log(req.body)
  res.render('confirmation', { firstname: req.body.firstname })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})