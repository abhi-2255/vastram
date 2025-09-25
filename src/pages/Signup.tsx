import { dataTagErrorSymbol, useSignupMutation } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router"
import { useState } from "react"
import Navbar from "../Navbar";
import axios from "axios";

const Signup = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const nameRegex = /^[A-Za-z]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "firstName":
                if (!value.trim()) return "First name is required";
                if (!nameRegex.test(value)) return "First name should only contain alphabets";
                break;
            case "lastName":
                if (!value.trim()) return "Last name is required";
                if (!nameRegex.test(value)) return "Last name should only contain alphabets";
                break;
            case "mobile":
                if (!value.trim()) return "Mobile number is required";
                if (!mobileRegex.test(value)) return "Enter 10 digits";
                break;
            case "email":
                if (!value.trim()) return "Email is required";
                if (!emailRegex.test(value)) return "Invalid email format";
                break;
            case "password":
                if (!value.trim()) return "Password is required";
                if (!passwordRegex.test(value)) return "Password must be strong";
                break;
            case "confirmPassword":
                if (value !== formData.password)
                    return "Passwords do not match";
                break;
        }
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        const error = validateField(name, value)
        setErrors((prev) => ({ ...prev, [name]: error }))
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value)
        setErrors((prev) => ({ ...prev, [name]: error }))
    }


    // const validateForm = () => {
    //     if (!nameRegex.test(formData.firstName)) return "First name should only contain alphabets"
    //     if (!nameRegex.test(formData.lastName)) return "Last name should only contain alphabets"
    //     if (!mobileRegex.test(formData.mobile)) return "Enter 10 digits"
    //     if (!emailRegex.test(formData.email)) return "Invalid email format"
    //     if (!passwordRegex.test(formData.password)) return "Password must be strong"
    //     if (formData.password !== formData.confirmPassword) return "Passwords do not match";
    //     return null;
    // }

    const signupMutation = useSignupMutation()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        signupMutation.mutate(formData,{
            onSuccess:(data: { token: string; })=>{
                localStorage.setItem("token",data.token)
                router.navigate({to:"/home"})
            },
            onError:(error: never)=>{
                console.error(error);
                alert("Signup Failed")
            }
        })
    }
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-10 flex justify-center ">
                <form onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center w-xs text-gray-800 bg-amber-50 space-y-3 p-5 border border-gray-100 rounded-md">
                    <h2 className="inline-flex items-center text-3xl mb-2">Create Account</h2>
                    <div className="flex flex-col justify-center items-center w-full space-y-3 p-2">
                        <>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="First name" />
                            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                            < input type="text" name="lastName" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Last name" />
                            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                            < input type="text" name="mobile" value={formData.mobile} onChange={handleChange} onBlur={handleBlur} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Mobile Number" />
                            {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
                        </>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Email" />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <input type="password" name="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Password" />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} className="px-3 py-2 w-[90%]  border border-gray-800" placeholder="Confirm Password" />
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                        <div className="flex justify-around w-full gap-2">
                            <p className="cursor-pointer text-sm font-medium">Forgot your password?</p>
                        </div>
                        <button type="submit" className="bg-red-400 hover:bg-red-500 cursor-pointer text-white px-5 py-2 mt-2 rounded">SignUp</button>
                    </div>
                </form>
            </div>
        </>


    )
}
export default Signup;