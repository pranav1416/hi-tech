import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import orderHistoryRoutes from './routes/orderHistoryRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import bodyParser from 'body-parser'
import { createRequire } from 'module'
import BrowserRoutes from './routes/browserRoutes.js'
<<<<<<< HEAD
import homeRoutes from './routes/homeRoutes.js'
=======
import cors from 'cors'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//const path = require('path')
//var cors = require('cors')

console.log('Hello world')
>>>>>>> 2e6933356566cabfd9936cd8b6121b19a1b1d90f

dotenv.config()

connectDB()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/review', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/orderHistory', orderHistoryRoutes)
<<<<<<< HEAD
app.use('/api/browser', BrowserRoutes)
app.use('/api/products', homeRoutes )
app.use(notFound)
app.use(errorHandler)
=======
// app.use(notFound)
// app.use(errorHandler)

if (process.env.NODE_ENV === 'development') {
  // app.use(express.static(path.join(__dirname, '../frontend', 'build')))

  // app.get('/*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
  // })
  app.get('/', (req, res) => {
    console.log('Inside API is running')
    res.send('API is running!')
  })
}

//production mode
console.log(process.env)
if (process.env.NODE_ENV === 'production') {
  console.log('RUNNING IN PROD ')
  app.use(express.static(path.join(__dirname, '../frontend', 'build')))
  //
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
  })
}
>>>>>>> 2e6933356566cabfd9936cd8b6121b19a1b1d90f

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(
    `Server is set up and running in ${process.env.NODE_ENV} on port ${PORT} `
  )
)
