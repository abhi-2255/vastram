const { default: mongoose } = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/vastram",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=> console.log("MongoDB connected"))
.catch(err=> console.error(err))

app.use("/api/auth",authRoutes)

app.listen(5000,()=>console.log("Server running"))