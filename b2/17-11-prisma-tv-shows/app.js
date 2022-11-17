import express from "express"
import cors from "cors"
import { PrismaClient } from '@prisma/client'

import showsRouter from "./routers/ShowsRouter.js"

// initialize app
const app = express()
app.use(express.json())
app.use(cors())

// initialize Prisma
const prisma = new PrismaClient()

const port = 3001

const v1 = express.Router()

v1.use("/shows", showsRouter)

v1.post("/like/:id", async (req, res) => {
  const id = parseInt(req.params.id)

  const show = await prisma.show.update({
    where: {
      id
    },
    data: {
      likes: {
        increment: 1
      }
    }
  })

  res.json(show)
})

app.use("/v1/", v1)

app.use((req, res) => {
  res.status(404).json({ message: "not found" })
})

app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message })
})

// run the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})