import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDb()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))

app.get("/",(req,res)=> {
    res.send("API WORKING")
})

app.listen(port, ()=> {
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://adelobajoshua19:09013902168Aj@cluster0.qkgnydf.mongodb.net/