import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, } from "@tanstack/react-router";
import axios from "axios";
import { useSignupStore } from "../store/signupStore";
import { useVerifyOtpMutation } from "../queries/authQueries";

const API_URL = import.meta.env.VITE_API_URL as string;

const OtpForm = () => {
    const router = useRouter()
    const { signupData, clearSignupData } = useSignupStore()
    const email = signupData?.email || ""
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [timer, setTimer] = useState(60)
    const [isResendDisabled, setIsResendDisabled] = useState(true)
    const otpSentRef = useRef(false)


    const verifyOtpMutation = useVerifyOtpMutation((data) => {
        if (data.success) {
            alert("🎉 Account created successfully!");
            clearSignupData();
            router.navigate({ to: "/login" });
        } else {
            setMessage(data.message || "Invalid OTP");
        }
    })

    const handleVerifyOtp = () => {
        if (!otp.trim()) {
            alert("Please enter the OTP");
            return;
        }

        if (!signupData?.email) {
            alert("Email missing! Please sign up again.");
            router.navigate({ to: "/signup" });
            return;
        }

        verifyOtpMutation.mutate({
            email: signupData.email,
            otp,
        });
    };

    useEffect(() => {
        if (timer > 0 && isResendDisabled) {
            const interval = setInterval(() => setTimer((t) => t - 1), 1000)
            return () => clearInterval(interval)
        } else if (timer === 0) {
            setIsResendDisabled(false)
        }
    }, [timer, isResendDisabled])

    const sendOtp = useCallback(async () => {
        try {
            setIsResendDisabled(true)
            setTimer(60)
            const { data } = await axios.post(`${API_URL}/auth/send-otp`, {
                email
            })
            setMessage(data.message || "OTP sent!")
        } catch (error) {
            console.error("Error sending OTP", error)
            setMessage("Error sending OTP. Try Again later");
        }
    }, [email])

    useEffect(() => {
            otpSentRef.current = true;
    },[]);

    return (
        <>
            <div className="p-4 w-md mx-auto mt-30 bg-amber-50">
                <h2 className="text-xl font-bold mb-2 ">Email OTP Verification</h2>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    readOnly
                    className="border p-2 w-full mb-2"
                />
                <button
                    onClick={sendOtp}
                    disabled={isResendDisabled}
                    className={`bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded mb-2 max-w-md
                        ${isResendDisabled ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-400 hover:bg-red-500"
                        }`}
                >
                    {isResendDisabled ? `Resend in ${timer}s` : "Send OTP"}
                </button>
                {/* OTP Input  */}
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <button
                    onClick={handleVerifyOtp}
                    disabled={verifyOtpMutation.isPending}
                    className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded mb-2 max-w-md grid place-content-end"
                >
                    {verifyOtpMutation.isPending ? "Verifying..." : "Verify OTP"}
                </button>
                {verifyOtpMutation.isError && (
                    <p className="text-sm text-gray-700">{message}
                        {verifyOtpMutation.error instanceof Error
                            ? verifyOtpMutation.error.message
                            : "Something went wrong"}
                    </p>
                )}
            </div>
        </>
    );
};

export default OtpForm;
