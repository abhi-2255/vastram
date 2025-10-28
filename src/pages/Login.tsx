import { useRouter, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../queries/authQueries";


const Login = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    const validateField = (name: string, value: string) => {
        if (name === "email" && !emailRegex.test(value)) return "Invalid Email"
        if (name === "password" && !passwordRegex.test(value)) return "Weak Password"
        return "";
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }

    const loginMutation = useLoginMutation()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            router.navigate({ to: '/' })
        }
    }, [router])


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        loginMutation.mutate(formData, {
            onSuccess: (data) => {
                localStorage.setItem("token", data.token)
                window.history.replaceState(null, '', window.location.href)
                router.navigate({ to: '/' })
            },
            onError: (error) => {
                console.error(error);
                alert('Login Failed')
            }
        })
    }
    return (
        <>
            <div className="container mx-auto mt-10 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center w-xs bg-amber-50 space-y-3 p-5 border rounded-md"
                >
                    <h2 className="text-3xl mb-2">Login</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-3 py-2 w-[90%] border border-gray-800"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="px-3 py-2 w-[90%] border border-gray-800"
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                    <Link to="/signup" className="flex justify-around w-full gap-2">
                        <p className="cursor-pointer text-sm font-medium">Create a new account.</p>
                    </Link>
                    <button
                        type="submit"
                        className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 mt-2 rounded"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;