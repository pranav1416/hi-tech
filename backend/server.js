import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderHistoryRoutes from "./routes/orderHistoryRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import bodyParser from 'body-parser';
import { createRequire } from 'module';
import BrowserRoutes from './routes/browserRoutes.js'

const require = createRequire(import.meta.url);
var cors = require('cors')
dotenv.config()

connectDB()
const app = express()
app.use(bodyParser());
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running!')
})

app.use('/api/products', productRoutes)
app.use('/api/review', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orderHistory', orderHistoryRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(
    `Server is set up and running in ${process.env.NODE_ENV} on port ${PORT} `
  )
)
