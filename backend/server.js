import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderHistoryRoutes from './routes/orderHistoryRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import browsingRoutes from './routes/browsingRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import bodyParser from 'body-parser'
import { createRequire } from 'module'
import BrowserRoutes from './routes/browserRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import cors from 'cors'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('Hello world')

dotenv.config()

connectDB()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/search', browsingRoutes)
app.use('/api/review', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/orderHistory', orderHistoryRoutes)
//app.use('/api/browser', BrowserRoutes)
//app.use('/api/products', homeRoutes)

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
  app.use(notFound)
  app.use(errorHandler)
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

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(
    `Server is set up and running in ${process.env.NODE_ENV} on port ${PORT} `
  )
)
