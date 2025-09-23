
export interface LoginData{
    email: string;
    password: string;
}

export interface SignupData{
    firsName: string;
    lastName: string;
    mobile: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface AuthResponse{
    token: string;
    message?: string;
}