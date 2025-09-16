import React, { useState, useRef, type ChangeEvent } from 'react';

interface Category {
    _id: string;
    name: string;
}

interface FormData {
    title: string;
    color: string;
    size: string;
    stock: string;
    description: string;
    price: string;
    category: string;
    images: File[];
}

interface AddProductFormProps {
    categories?: Category[];
    onSubmit?: (formData: FormData) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({
    categories = [
        { _id: '1', name: 'Electronics' },
        { _id: '2', name: 'Clothing' },
        { _id: '3', name: 'Home & Garden' },
        { _id: '4', name: 'Sports' }
    ],
    onSubmit
}) => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        color: '',
        size: '',
        stock: '',
        description: '',
        price: '',
        category: '',
        images: []
    });

    const [imagePreviews, setImagePreviews] = useState<string[]>(['', '', '', '']);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        setFormData(prev => ({
            ...prev,
            images: files
        }));

        // Create preview URLs
        const urls = files.map(file => URL.createObjectURL(file));
        const newPreviews = ['', '', '', ''];
        urls.forEach((url, index) => {
            if (index < 4) {
                newPreviews[index] = url;
            }
        });
        setImagePreviews(newPreviews);

        // Clean up old URLs
        imagePreviews.forEach(url => {
            if (url) URL.revokeObjectURL(url);
        });
    };

    const handleSubmit = () => {
        // Basic validation
        if (!formData.title || !formData.price || !formData.category) {
            alert('Please fill in all required fields');
            return;
        }

        if (formData.images.length < 3) {
            alert('Please upload at least 3 images');
            return;
        }

        if (onSubmit) {
            onSubmit(formData);
        } else {
            console.log('Form submitted:', formData);
            alert('Product added successfully!');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500">Welcome, Admin</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Add New Product</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left Column - Main Form */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Product Details Card */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="mb-6">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                    Product Name *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
                                        Color
                                    </label>
                                    <input
                                        type="text"
                                        id="color"
                                        name="color"
                                        value={formData.color}
                                        onChange={handleInputChange}
                                        placeholder="Type here"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                                        Size
                                    </label>
                                    <input
                                        type="text"
                                        id="size"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleInputChange}
                                        placeholder="Type here"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleInputChange}
                                        placeholder="Type here"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description Card */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Images Card */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div>
                                <label htmlFor="imageInp" className="block text-sm font-medium text-gray-700 mb-2">
                                    Images (Minimum 3) *
                                </label>
                                <input
                                    ref={fileInputRef}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    id="imageInp"
                                    type="file"
                                    name="image"
                                    multiple
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-4 gap-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="aspect-square border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt={`Preview ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                                <span className="text-gray-400 text-sm">Image {index + 1}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Price and Category */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <div className="mb-6">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                                    Price *
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Type here"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                    Categories *
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select category</option>
                                    {categories.map((category) => (
                                        <option key={category._id} value={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Create & Save
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="text-sm text-gray-500">
                            {new Date().getFullYear()} ©, Evara - HTML Ecommerce Template
                        </div>
                        <div className="text-sm text-gray-500">
                            All rights reserved
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AddProductForm;