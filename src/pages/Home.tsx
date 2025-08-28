import type React from "react";
import Navbar from "../Navbar";


const Home: React.FC = () => {
    const categories: string[] = ['Bridal Wear', 'Groom Wear', 'Family Collection', 'Festive Outfits', 'Sangeet Colletion']
    return (
        <div className="min-h-screen bg-white text-gray-900 " >
            <Navbar />
            {/* Hero Section         */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-20 gap-10">
                <div>
                    <h2 className="text-5xl font-serif leading-tight">
                        Find Your Perfect{" "}
                        <span className="text-red-700">Blend</span> of Our{" "}
                        <span className="text-red-700">Traditional</span> and Modern{" "}
                        <span className="text-red-700">Fashion</span>
                    </h2>
                    <p className="mt-6 text-gray-600">
                        Discover collections that merge heritage with modern style.
                    </p>
                    <div className="flex gap-4 mt-5">
                        <button className="px-5 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-100">
                            Explore all
                        </button>
                    </div>
                </div>


            </section>

            {/* Categories Section  */}
            <div className="flex justify-center gap-6 py-9+">
                {categories.map((item:string, idx: number)=>(
                    <button key={idx} className="px-5 py-3 border border-gray-400 rounded-2xl hover:bg-red-100 transition">{item}</button>
                ))}
            </div>

        </div>


    )
}

export default Home;

