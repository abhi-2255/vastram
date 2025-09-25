import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, LoginData, SignupData } from "../models/auth";
import axios from "axios";


const apiUrl = import.meta.env.VITE_API_URL;

export const useLoginMutation = (onSuccess?: (data: AuthResponse)=>void) =>{
    return useMutation({
        mutationFn: async(data:LoginData): Promise<AuthResponse> =>{
            const res = await axios.post(`${apiUrl}/login`,data)
            return res.data;
        },
        onSuccess,
    })
}

export const useSignupMutation = (onSuccess?: (data: AuthResponse)=>void)=>{
    return useMutation({
        mutationFn: async(data:SignupData): Promise<AuthResponse>=>{
            const res = await axios.post(`${apiUrl}/signup`,data)
            return res.data;
        },
        onSuccess,
    })
}