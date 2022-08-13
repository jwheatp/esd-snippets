const express = require("express")

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index', { firstname: "Luke" })
})

app.listen(3000, () => {
  console.log("coucou")
})