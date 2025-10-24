import { create } from "zustand";

interface SignupData {
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    password: string;
}

interface SignupStore {
    signupData: SignupData | null;
    setSignupData: (data: SignupData) => void;
    clearSignupData: () => void;
}

export const useSignupStore = create<SignupStore>((set) => ({
    signupData: null,
    setSignupData: (data) => set({ signupData: data }),
    clearSignupData: () => set({ signupData: null }),
}));
