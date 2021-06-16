import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()

mongoose.connect(String(process.env.DATABASE_CONNECT), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const { PORT } = process.env

const api = express()

api.use(express.json())
api.use(cors())
api.use(routes)

api.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

api.listen(PORT, () => {
  console.log(`Api Running on PORT: ${PORT}`)
})

export default api
