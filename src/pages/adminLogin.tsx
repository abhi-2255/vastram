import React, { useState } from 'react';
import axios from 'axios';


const BASE_URL = import.meta.env.VITE_API_URL as string;

interface LoginFormData {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
    general?: string;
}

const AdminLogin: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '', });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Username or email is required';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            // Replace this with your actual login API call
            const response = await axios.post(`${BASE_URL}/admin/login`, formData, {
                headers: { "Content-Type": "application/json" },
            })
            console.log('Login successful', response.data);
            localStorage.setItem("adminToken", response.data.token);
            window.location.href = "/admin/dashboard";
        } catch (error: unknown) {
            console.error('Login error:', error);
            if (axios.isAxiosError(error)) {
                // Backend returned an error message
                setErrors({
                    general: error.response?.data?.message || "Login failed. Please try again.",
                });
            } else {
                // Network or unexpected error
                setErrors({ general: "Network error. Please check your connection." });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col min-h-screen bg-amber-50 text-white relative overflow-hidden">
            {/* Background wave effect */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full"
                >
                    <path
                        fill="#f8f9fa"
                        fillOpacity="1"
                        d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,181.3C672,192,768,160,864,160C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Centered login card */}
            <div className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-md bg-[#133a52]/70 rounded-2xl shadow-lg p-8">
                    {/* Logo + Heading */}
                    <div className="flex flex-col items-center mb-6">
                        <h1 className="text-2xl font-semibold mb-1">Sign in</h1>
                        <p className="text-gray-300 text-sm">
                            Sign in and start managing your customers!
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Login"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-[#0e2a3a] text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-[#0e2a3a] text-gray-200 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        {errors.general && (
                            <div className="text-red-400 text-center text-sm">
                                {errors.general}
                            </div>
                        )}
                        
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-200"
                            >
                                {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-4 text-gray-300 text-sm relative z-10">
                {currentYear} © Vastram - The Complete Ethnic Traditional Store. <br />
                All rights reserved.
            </footer>
        </div>
    );
}
export default AdminLogin;