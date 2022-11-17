import express from "express"
import createHttpError from "http-errors"

import { PrismaClient } from '@prisma/client'

import { ShowValidator } from "../validators/ShowValidator.js"

// initialize router
const router = express.Router()

// initialize Prisma
const prisma = new PrismaClient()

/**
 * POST /shows
 * Create a Show
 */
router.post("/", async (req, res, next) => {
  // validate incoming data
  let data;
  try {
    data = ShowValidator.parse(req.body)
  } catch(error) {
    return res.status(400).json({ errors: error.issues })
  }

  // insert data in db
  try {
    const show = await prisma.show.create({
      data
    })
    res.json(show)
  } catch(error) {
    next(createHttpError(500, error.message))
  }
})

export default router