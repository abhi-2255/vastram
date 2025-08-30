const router = express.Router();

router.post("/signup",async(req,res)=>{
    try {
        const {firstName, lastName, mobile, email, password, confirmPassword}= req.body
        if(existingUser) return res.status(400).json({message:"User already exists"})

            const hashedPassword = await bcrypt.hash(password,10)

            const user = new User({firstName,lastName,mobile,email,password:hashedPassword,confirmPassword:hashedPassword})
            await user.save(
                res.status(201).json({message:"User created successfullu"})
            )
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
})