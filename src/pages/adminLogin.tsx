import React, { useState } from 'react';

interface LoginFormData {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}

const AdminLogin: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: ''
    });

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
            const response = await fetch('/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful login
                console.log('Login successful');
                // Redirect to admin dashboard or handle success
            } else {
                // Handle login error
                const errorData = await response.json();
                setErrors({ email: errorData.message || 'Login failed' });
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrors({ email: 'An error occurred. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <main>
            <section className="content-main mt-80 mb-80">
                <div className="card mx-auto card-login">
                    <div className="card-body">
                        <h4 className="card-title mb-4">Admin Login</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Username or email"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && (
                                    <p>
                                        <div className="text-danger" id="emailError">
                                            {errors.email}
                                        </div>
                                    </p>
                                )}
                            </div>

                            <div className="mb-3">
                                <input
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                {errors.password && (
                                    <p>
                                        <div className="text-danger" id="passwordError">
                                            {errors.password}
                                        </div>
                                    </p>
                                )}
                            </div>

                            <div className="mb-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="main-footer text-center">
                <p className="font-xs">
                    {currentYear} © InstyleSole - The Complete Shoe Store .
                </p>
                <p className="font-xs mb-30">All rights reserved</p>
            </footer>
        </main>
    );
};

export default AdminLogin;