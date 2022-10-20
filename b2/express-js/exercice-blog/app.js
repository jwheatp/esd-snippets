// import express
import express from 'express'

// blog routes
import blogRoutes from "./routes/blog.js"

// initialize app
const app = express()

// configuration
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/blog', blogRoutes)

// run the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
