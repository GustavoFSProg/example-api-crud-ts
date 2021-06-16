import { model, Schema } from 'mongoose'
import { Request, Response } from 'express'

const schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
})

export default model('UserModel', schema)
