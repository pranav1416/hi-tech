import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
dotenv.config()

connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send("API is running!")
})


app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(
  PORT,
  console.log(
    `Server is set up and running in ${process.env.NODE_ENV} on port ${PORT} `
  )
)
