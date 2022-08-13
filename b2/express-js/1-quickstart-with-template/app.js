const express = require("express")

const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index', { firstname: "Luke" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})