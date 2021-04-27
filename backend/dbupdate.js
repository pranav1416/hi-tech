import Product from './models/productModel.js'
import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://pranav:axel123@mongodb01.rjcym.mongodb.net/hitech?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )

    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
connectDB()
const queryOut = await Product.find({})
console.log(queryOut)
