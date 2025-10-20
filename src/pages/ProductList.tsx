import React from "react";

interface Product {
    id: number;
    image: string;
    title: string;
    price: string;
}

const popularProducts: Product[] = [
    {
        id: 1,
        image: "/images/p1.jpg",
        title: "Multi Color Net Embroidered Lehenga Set",
        price: "₹7,500",
    },
    {
        id: 2,
        image: "/images/p2.jpg",
        title: "Embellished Indian Bridal Mirror Lehenga Choli",
        price: "₹25,700",
    },
    {
        id: 3,
        image: "/images/p3.jpg",
        title: "Green Blouse Embroidered Lehenga Set",
        price: "₹22,800",
    },
    {
        id: 4,
        image: "/images/p4.jpg",
        title: "Pink Silk Floral Embroidered Bundi And Kurta Set",
        price: "₹11,500",
    },
];

const newArrivalImages = [
    "/images/na1.jpg",
    "/images/na2.jpg",
    "/images/na3.jpg",
];

const ProductList: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
            {/* Popular Products */}
            <section>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold tracking-wide">
                        Popular Products
                    </h2>
                    <a
                        href="#"
                        className="text-gray-700 text-sm hover:underline flex items-center gap-1"
                    >
                        View All →
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {popularProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm text-center p-4"
                        >
                            {/* Custom shaped image container */}
                            <div className="overflow-hidden rounded-t-[3rem] rounded-b-xl">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-72 object-cover"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-800 text-sm mb-1">{product.title}</p>
                                <p className="font-semibold text-gray-900">{product.price}</p>
                                <button className="mt-3 border border-gray-400 px-4 py-1.5 rounded-full text-sm hover:bg-black hover:text-white transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* New Arrival Section */}
            <section className="border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
                {/* Left images */}
                <div className="flex gap-4 flex-1 justify-center">
                    {newArrivalImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="New Arrival"
                            className="w-32 h-48 object-cover rounded-lg shadow-sm"
                        />
                    ))}
                </div>

                {/* Right text content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                        New Arrival
                    </p>
                    <h3 className="text-xl font-semibold leading-snug mb-4">
                        Fabulous Blue and Grey <br /> Silk Fabric Embroidered <br /> Lehenga
                        Choli
                    </h3>
                    <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
