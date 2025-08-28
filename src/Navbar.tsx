import { Heart, Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <>
            {/* Navbar  */}
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl font-bold font-prata text-red-800">Vastram</h1>
                <ul className="flex gap-5 text-lg">
                    <li className="cursor-pointer hover:text-red-700">Men</li>
                    <li className="cursor-pointer hover:text-red-700">Women</li>
                    <li className="cursor-pointer hover:text-red-700">Occasions</li>
                    <li className="cursor-pointer hover:text-red-700">Accessories</li>
                    <li className="cursor-pointer hover:text-red-700">About Us</li>
                </ul>
                <div className="flex gap-4">
                    <Search className="w-6 h-6 cursor-pointer hover:text-red-700" />
                    <Heart className="w-6 h-6 cursor-pointer hover:text-red-700" />
                    <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-red-700" />
                </div>
            </nav>
        </>
    )
}