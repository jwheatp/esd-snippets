import express from "express"

import { PrismaClient, Prisma } from '@prisma/client'
import createHttpError from "http-errors"

const prisma = new PrismaClient()

// initialize app
const app = express()

// port parameter, used at the end
const port = 3000

/**
 * Returns information about the user and his posts
 * id: id of the user
 */

// async/await version
app.get('/users/:id', async (req, res, next) => {
  const id = parseInt(req.params.id)

  let user
  try {
    user = await prisma.user.findUniqueOrThrow({
      where: {
        id
      },
      include: {
        posts: true
      }
    })  
  } catch(error) {
    // error : user is not found
    if(error instanceof Prisma.NotFoundError) {
      return next(createHttpError(404, "User not found"))
    }
  }

  res.json({ posts: user.posts })
})

// then/catch version
// app.get('/users/:id', (req, res, next) => {
//   const id = parseInt(req.params.id)

//   prisma.user.findUniqueOrThrow({
//     where: {
//       id
//     },
//     include: {
//       posts: true
//     }
//   }).then((user) => {
//     res.json({ posts: user.posts })
//   }).catch((error) => {
//     // error : user is not found
//     if(error instanceof Prisma.NotFoundError) {
//       res.status(404).json({ message: "User not found" })
//     }
//   })
// })

/**
 * 404 middleware
 */
app.use((req, res) => {
  res.status(404).json({ message: "not found" })
})

/**
 * Error middleware
 */
app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message })
})

// run the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})