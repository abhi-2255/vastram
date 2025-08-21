import { useState } from "react"

const Login = () => {

    const [currentState, setCurrentState] = useState('Signup')
    return (
        <div className="container mx-auto">
            <form className="flex justify-center  items-center w-90% text-gray-800">
                <div className="inline-flex items-center w-full">
                    <h2 className="">{currentState}</h2>
                </div>

                {currentState === 'Login' ? '' : <input type="text" placeholder="First name" />}
                {currentState === 'Login' ? '' : < input type="text" placeholder="Last name" />}
                {currentState === 'Login' ? '' : < input type="text" placeholder="Mobile Number" />}
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confirm Password" />
                <div className="flex justify-between w-full">
                    <p>Forgot your password?</p>
                    {currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create Account!</p>
                        : <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login Here!</p>}

                </div>

            </form>
        </div>

    )
}
export default Login