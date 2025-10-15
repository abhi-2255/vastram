import { Link, useRouter } from "@tanstack/react-router";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setIsLoggedIn(!!token)
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false)
        setMenuOpen(false)
        router.navigate({ to: '/login' })
    }
    return (
        <>
            {/* Navbar  */}
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-red-800">Vastram!</h1>
                <ul className="flex gap-5 text-lg">
                    <li className="cursor-pointer hover:text-red-700">Men</li>
                    <li className="cursor-pointer hover:text-red-700">Women</li>
                    <li className="cursor-pointer hover:text-red-700">Occasions</li>
                    <li className="cursor-pointer hover:text-red-700">Accessories</li>
                    <li className="cursor-pointer hover:text-red-700">About Us</li>
                </ul>
                <div className="flex gap-4">
                    <Link to=""><Search className="w-6 h-6 cursor-pointer hover:text-red-700" /></Link>
                    <Link to=""><Heart className="w-6 h-6 cursor-pointer hover:text-red-700" /></Link>
                    <Link to=""><ShoppingCart className="w-6 h-6 cursor-pointer hover:text-red-700" /></Link>
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={() => setMenuOpen((prev) => !prev)} className="focus:outline-none">
                            <User className="w-6 h-6 cursor-pointer hover:text-red-700" />
                        </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-24 bg-amber-50 shasow-lg rounded-md text-center z-10">
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="w-full py-2 hover:bg-red-100 rounded-md">
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" onClick={()=> setMenuOpen(false)}
                                className="block w-full py-2 hover:bg-red-100 rounded-md">
                                    Login
                                </Link>
                            )}
                        </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}