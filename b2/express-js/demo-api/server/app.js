import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
  origin: ["http://127.0.0.1:8080"]
}))
app.use(express.json())

let cities = [
  {
    "name": "Paris",
    "department": "75"
  },
  {
    "name": "Rennes",
    "department": "35"
  },
  {
    "name": "Lyon",
    "department": "69"
  },
  {
    "name": "Marseille",
    "department": "13"
  }
]

app.get("/cities", (req, res) => {
  res.json(cities)
})

app.post("/city", (req, res) => {
  const city = req.body

  cities.push(city)

  res.json({ message: "ok" })
})

app.listen(3000)