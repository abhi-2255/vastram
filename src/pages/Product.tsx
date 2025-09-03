import React from "react";

interface Product {
    id: number;
    image: string;
    title: string;
    price: string;
}

interface Category {
    id: number;
    image: string;
    title: string;
}

const featuredProducts: Product[] = [
    {
        id: 1,
        image: "/images/product1.jpg",
        title: "Multi Color Net Embroidered Lehenga Set",
        price: "₹27,200",
    },
    {
        id: 2,
        image: "/images/product2.jpg",
        title: "Green Quilted Jacket And Pant Set",
        price: "₹17,500",
    },
    {
        id: 3,
        image: "/images/product3.jpg",
        title: "Yellow Silk Blend Floral Embroidered Bundi",
        price: "₹12,500",
    },
    {
        id: 4,
        image: "/images/product4.jpg",
        title: "Wine Pure Banarasi Silk Lehenga Choli",
        price: "₹10,500",
    },
];

const categories: Category[] = [
    { id: 1, image: "/images/cat1.jpg", title: "SAREES" },
    { id: 2, image: "/images/cat2.jpg", title: "LEHENGA CHOLI" },
    { id: 3, image: "/images/cat3.jpg", title: "SALWAR SUIT" },
    { id: 4, image: "/images/cat4.jpg", title: "INDO-WESTERN" },
    { id: 5, image: "/images/cat5.jpg", title: "KURTAS" },
    { id: 6, image: "/images/cat6.jpg", title: "BUNDI SET" },
    { id: 7, image: "/images/cat7.jpg", title: "INDO-WESTERN" },
    { id: 8, image: "/images/cat8.jpg", title: "BANDHGALA" },
];

const HomePage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Featured Products */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold tracking-wide border-b-2 border-gray-200 pb-2">
                        Featured Products
                    </h2>
                    <a href="#" className="text-gray-600 hover:text-black text-sm">
                        View All →
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-sm rounded-xl overflow-hidden text-center"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-72 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-gray-700 text-sm mb-2">{product.title}</p>
                                <p className="font-semibold mb-3">{product.price}</p>
                                <button className="border border-gray-500 px-4 py-2 rounded text-sm hover:bg-black hover:text-white transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Categories */}
            <div>
                <h2 className="text-2xl font-semibold tracking-wide border-b-2 border-gray-200 pb-2 mb-6">
                    Popular Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="relative rounded-xl overflow-hidden group"
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white font-bold text-lg tracking-wide">
                                    {cat.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
