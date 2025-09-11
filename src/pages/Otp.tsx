import { useState } from "react";
import Navbar from "../Navbar";

const API_URL = import.meta.env.VITE_API_URL as string;

const OtpForm = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    const sendOtp = async () => {
        try {
            const res = await fetch(`${API_URL}/auth/send-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            setMessage(data.message || "OTP sent!");
        } catch (err) {
            console.error("Error sending OTP", err);
            setMessage("Error sending OTP");
        }
    };

    const verifyOtp = async () => {
        try {
            const res = await fetch(`${API_URL}/auth/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });
            const data = await res.json();
            setMessage(data.message || "OTP verified!");
        } catch (err) {
            console.error("Error verifying OTP", err);
            setMessage("Error verifying OTP");
        }
    };

    return (
        <>
            <Navbar />
            <div className="p-4 w-md mx-auto mt-30 bg-amber-50">
                <h2 className="text-xl font-bold mb-2 ">Email OTP Verification</h2>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-2"
                />

                <button
                    onClick={sendOtp}
                    className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded mb-2 max-w-md" 
                >
                    Send OTP
                </button>

                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border p-2 w-full mb-2"
                />

                <button
                    onClick={verifyOtp}
                    className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded mb-2 max-w-md grid place-content-end"
                >
                    Verify OTP
                </button>

                <p className="text-sm text-gray-700">{message}</p>
            </div>
        </>

    );
};

export default OtpForm;
