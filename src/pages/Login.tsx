import { useState } from "react"

const Login = () => {

    const [currentState, setCurrentState] = useState('Signup')
    return (
        <div className="container mx-auto mt-10 flex justify-center ">
            <div className="flex flex-col justify-center items-center w-md text-gray-800 bg-amber-50 space-y-3 p-5">
                <div className="inline-flex items-center ">
                    <h2 className="text-3xl mb-4">{currentState}</h2>
                </div>
                <form action="" className="flex flex-col justify-center items-center space-y-3">
                    {currentState === 'Login' ? '' : <input type="text" className="px-3 py-2 border border-gray-800" placeholder="First name" />}
                    {currentState === 'Login' ? '' : < input type="text" className="px-3 py-2 border border-gray-800" placeholder="Last name" />}
                    {currentState === 'Login' ? '' : < input type="text" className="px-3 py-2 border border-gray-800" placeholder="Mobile Number" />}
                    <input type="text" className="px-3 py-2 border border-gray-800" placeholder="Email" />
                    <input type="text" className="px-3 py-2 border border-gray-800" placeholder="Password" />
                    {currentState === 'Login' ? '' : <input type="text" className="px-3 py-2 border border-gray-800" placeholder="Confirm Password" />}
                    <div className="flex justify-evenly gap-2">
                        <p className="cursor-pointer text-sm">Forgot your password?</p>
                        {currentState === 'Login'
                            ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-sm">Create Account!</p>
                            : <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-sm ">Login Here!</p>}
                    </div>
                    <button className="bg-red-400 hover:bg-red-500 text-white px-5 py-2">{currentState === 'Login' ? 'SignIn' : 'SignUp'}</button>
                </form>

            </div>
        </div>

    )
}
export default Login