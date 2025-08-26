import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"

const Login = () => {

    const [currentState, setCurrentState] = useState('Signup')
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
    }
    return (
        <div className="container mx-auto mt-10 flex justify-center ">
            <div className="flex flex-col justify-center items-center w-xs text-gray-800 bg-amber-50 space-y-3 p-5">
                <div className="inline-flex items-center ">
                    <h2 className="text-3xl mb-2">{currentState}</h2>
                </div>
                <form onSubmit={onSubmitHandler} className="flex flex-col justify-center items-center w-full space-y-3">
                    {currentState === 'Login' ? '' : (
                        <>
                            <input type="text" name="firstName" value={formData.firstName} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="First name" />
                            < input type="text" name="lastName" value={formData.lastName} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Last name" />
                            < input type="text" name="mobile" value={formData.mobile} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Mobile Number" />
                        </>
                    )}
                    <input type="text" name="email" value={formData.email} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Email" />
                    <input type="text" name="password" value={formData.password} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Password" />
                    {currentState === 'Login' ? '' : <input type="text" name="confirmPassword" value={formData.confirmPassword} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Confirm Password" />}
                    <div className="flex justify-around w-full gap-2">
                        <p className="cursor-pointer text-sm font-medium">Forgot your password?</p>
                        {currentState === 'Login'
                            ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-sm text-blue-500">Create Account!</p>
                            : <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-sm text-blue-500">Login Here!</p>}
                    </div>
                    <button className="bg-red-400 hover:bg-red-500 text-white px-5 py-2">{currentState === 'Login' ? 'SignIn' : 'SignUp'}</button>
                </form>

            </div>
        </div>

    )
}
export default Login