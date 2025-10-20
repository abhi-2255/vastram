import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, LoginData, SignupData } from "../models/auth";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL as string

export const useLoginMutation = (onSuccess?: (data: AuthResponse)=>void) =>{
    return useMutation({
        mutationFn: async(data:LoginData): Promise<AuthResponse> =>{
            const res = await axios.post(`${API_URL}/auth/login`,data)
            return res.data;
        },
        onSuccess,
    })
}

export const useSignupMutation = (onSuccess?: (data: AuthResponse)=>void)=>{
    return useMutation({
        mutationFn: async(data:SignupData): Promise<AuthResponse>=>{
            const res = await axios.post(`${API_URL}/auth/signup`,data)
            return res.data;
        },
        onSuccess,
    })
}