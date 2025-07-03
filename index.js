import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
import connectDB from './mongodb/connect.js'
import { errorHandler } from './middlewares/errorMiddleware.js'

const app = express()
dotenv.config()
const Port = process.env.PORT


app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)

app.use(errorHandler)

app.listen(Port,async()=>{
    await connectDB(process.env.MONGO_URI,process.env.MONGODB_NAME)
    console.log(`Server is running on http://localhost:${Port}`)
})