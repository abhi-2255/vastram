export default function Home(){
    return (
        <div className="min-h-screen bg-white text-gray-900 " >
            {/* Navbar  */}
            <nav className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-red-800">Vastram</h1>

            </nav>

            {/* Hero Section         */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20 gap-10">
                <h1 className="text-5xl font-serif ">Vastram</h1>
                <ul className="flex gap-5 text-lg">
                    <li className="cursor-pointer hover:text-red-700">Men</li>
                    <li className="cursor-pointer hover:text-red-700">Women</li>
                    <li className="cursor-pointer hover:text-red-700">Occasions</li>
                    <li className="cursor-pointer hover:text-red-700">Accessories</li>
                    <li className="cursor-pointer hover:text-red-700">About Us</li>

                </ul>

            </section>
        </div>
    )
}