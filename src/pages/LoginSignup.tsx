import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router"
import { useState } from "react"
import Navbar from "../Navbar";

const Login = () => {
    const router = useRouter();
    const [currentState, setCurrentState] = useState('Signup')
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const mutation = useMutation({
        mutationFn: async (data: typeof formData) => {
            const url = currentState === 'Login' ? "/api/auth/login" : "/api/auth/signup";
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            if (!res.ok) throw new Error("Request Failed");
            return res.json();
        },
        onSuccess: (data) => {
            console.log("Success", data);
            localStorage.setItem("token", data.token)
            router.navigate({ to: "/home" })
        },
        onError: (error) => {
            console.error("Error", error);
        },
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate(formData)
    }
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 flex justify-center ">
                <form onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center w-xs text-gray-800 bg-amber-50 space-y-3 p-5 border border-gray-400 rounded-md">
                    <h2 className="inline-flex items-center text-3xl mb-2">{currentState}</h2>
                    <div className="flex flex-col justify-center items-center w-full space-y-3 p-2">
                        {currentState === 'Login' ? '' : (
                            <>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="First name" />
                                < input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Last name" />
                                < input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Mobile Number" />
                            </>
                        )}
                        <input type="text" name="email" value={formData.email} onChange={handleChange} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Email" />
                        <input type="text" name="password" value={formData.password} onChange={handleChange} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Password" />
                        {currentState === 'Login' ? '' : <input type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Confirm Password" />}
                        <div className="flex justify-around w-full gap-2">
                            <p className="cursor-pointer text-sm font-medium">Forgot your password?</p>
                            {currentState === 'Login'
                                ? <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-sm text-blue-500">Create Account!</p>
                                : <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-sm text-blue-500">Login Here!</p>}
                        </div>
                        <button type="submit" className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 mt-2 rounded">{currentState === 'Login' ? 'SignIn' : 'SignUp'}</button>
                    </div>
                </form>
            </div>
        </>


    )
}
export default Login