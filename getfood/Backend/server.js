import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoutes.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoutes.js'

// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection 
connectDB();

// api endpoints
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get('/',(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//  mongodb+srv://admin:admin123@cluster0.lhgma.mongodb.net/?