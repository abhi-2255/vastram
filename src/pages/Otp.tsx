import React, { useEffect, useState } from "react"

const OtpVerification: React.FC = () => {
    const [otp, setOtp] = useState<string>("")
    const [timer, setTimer] = useState<number>(60)
    const [canResend, setCanResend] = useState<boolean>(false)

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(interval)
        } else {
            setCanResend(true)
        }
    }, [timer])

    const handleVerify = async () => {
        try {
            const res = await fetch(`${API_URL}/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp, email: "test@example.com" })
            })
            const data = await res.json()
            alert(data.message);
        } catch (error) {
            console.error("Error verifying OTP")
        }
    }

    const handleResend = async () => {
        try {
            const res = await fetch(`${API_URL}/resend-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: "test@example.com" })
            })
            const data = await res.json()
            alert(data.message)
            setTimer(60)
            setCanResend(false)
        } catch (error) {
            console.error("Error resending OTP:", error);
        }
    }

    return (
        <div className="">
            <div>
                <h2>Verify OTP</h2>
            </div>
        </div>
    )
}