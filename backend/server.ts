import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import authRoutes from "./routes/auth"
import productRoutes from "./routes/ProductRoutes"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/vastram")
.then(()=> console.log("MongoDB connected"))
.catch(err=> console.error(err))



app.use("/api/auth",authRoutes)
app.use("/api/products", productRoutes)




app.listen(5000,()=>console.log("Server running"))