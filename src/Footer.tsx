import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-pink-50 pt-12 border-t border-gray-200">
            {/* Newsletter + Instagram */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-gray-200">
                {/* Newsletter */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-light">
                        Subscribe to <span className="text-rose-700 font-medium">our newsletter</span> and get updates on{" "}
                        <span className="text-rose-700 font-medium">new arrival</span>
                    </h3>
                    <div className="mt-4 flex justify-center md:justify-start max-w-md">
                        <input
                            type="email"
                            placeholder="your email address"
                            className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
                        />
                        <button className="bg-yellow-500 text-white px-6 py-2 rounded-r-full font-medium hover:bg-yellow-600 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Instagram */}
                <div className="flex-1 text-center md:text-right">
                    <h3 className="text-lg font-light mb-4">Follow us on Instagram</h3>
                    <div className="flex justify-center md:justify-end gap-3">
                        <img src="/images/insta1.jpg" alt="Insta1" className="w-20 h-24 object-cover rounded-md" />
                        <img src="/images/insta2.jpg" alt="Insta2" className="w-20 h-24 object-cover rounded-md" />
                        <img src="/images/insta3.jpg" alt="Insta3" className="w-20 h-24 object-cover rounded-md" />
                        <img src="/images/insta4.jpg" alt="Insta4" className="w-20 h-24 object-cover rounded-md" />
                    </div>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
                {/* Brand Info */}
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-2xl font-bold text-rose-800">vastram</h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        We are a fashion brand that offers the best of contemporary, ethnic Indian fashion, and fusion-wear styles.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Link</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-rose-700">Men</a></li>
                        <li><a href="#" className="hover:text-rose-700">Women</a></li>
                        <li><a href="#" className="hover:text-rose-700">Collection</a></li>
                        <li><a href="#" className="hover:text-rose-700">Virtual</a></li>
                    </ul>
                </div>

                {/* Vastram */}
                <div>
                    <h3 className="font-semibold mb-3">Vastram</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-rose-700">About Us</a></li>
                        <li><a href="#" className="hover:text-rose-700">Contact us</a></li>
                        <li><a href="#" className="hover:text-rose-700">Blog</a></li>
                        <li><a href="#" className="hover:text-rose-700">Press</a></li>
                        <li><a href="#" className="hover:text-rose-700">Careers</a></li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="font-semibold mb-3">Policies</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-rose-700">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-rose-700">Shipping</a></li>
                        <li><a href="#" className="hover:text-rose-700">Return</a></li>
                        <li><a href="#" className="hover:text-rose-700">Payment Policy</a></li>
                    </ul>
                </div>

                {/* My Account */}
                <div>
                    <h3 className="font-semibold mb-3">My Account</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-rose-700">Login</a></li>
                        <li><a href="#" className="hover:text-rose-700">Shopping Bag</a></li>
                        <li><a href="#" className="hover:text-rose-700">Wishlist</a></li>
                        <li><a href="#" className="hover:text-rose-700">Order Tracking</a></li>
                        <li><a href="#" className="hover:text-rose-700">Order History</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
