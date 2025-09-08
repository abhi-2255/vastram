import User from "../models/User";

const router = express.Router();

router.post("/signup",async(req,res)=>{
    try {
        const {firstName, lastName, mobile, email, password, }= req.body
        if(existingUser) return res.status(400).json({message:"User already exists"})

            const hashedPassword = await bcrypt.hash(password,10)

            const user = new User({firstName,lastName,mobile,email,password:hashedPassword})
            await user.save(
                res.status(201).json({message:"User created successfullu"})
            )
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})

router.post("/login",async(req,res)=>{
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({message:"Email not found"})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) res.status(400).json({message:"Invalid credentials"})

        const token = jwt.sign({id:user._id}, "secret123",{expiresIn: "1hr"})
        res.json({token,user})
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})

export default router;