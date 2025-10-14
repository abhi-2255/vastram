import type React from "react";
import Navbar from "../Navbar";
import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";


const Home: React.FC = () => {
    const router = useRouter()
    const categories: string[] = ['Bridal Wear',
        'Groom Wear',
        'Family Collection',
        'Festive Outfits',
        'Sangeet Colletion']

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.navigate({ to: '/login' })
        }
    }, [router])

    return (
        <div className="bg-white text-gray-900 font-[prata]" >
            <Navbar />
            {/* Hero Section         */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center px-10 py-10 gap-10">
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
                    {/* Categories Section  */}
                    <div className="flex flex-wrap gap-4 py-5 w-md">
                        {categories.map((item: string, idx: number) => (
                            <button key={idx} className="px-2 py-3 border border-gray-400 rounded-2xl hover:bg-red-100 transition">{item}</button>
                        ))}
                    </div>
                    <div className="flex mt-5">
                        <button className="px-5 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-100">
                            Explore all
                        </button>
                    </div>
                </div>
                {/* Image Section  */}
                <div className="flex justify-center ">
                    <img src="/images/home.webp" alt="couple fashion" className="rounded-3xl shadow-lg w-md " />
                </div>
            </section>
        </div>
    )
}

export default Home;

