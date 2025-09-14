import React, { useState } from 'react';
import {
    Menu,
    Bell,
    Moon,
    Cast,
    Globe,
    User,
    Settings,
    Wallet,
    Receipt,
    HelpCircle,
    LogOut,
    Search
} from 'lucide-react';

interface HeaderProps {
    onToggleSidebar?: () => void;
    userAvatar?: string;
    userName?: string;
}

const AdminHeader: React.FC<HeaderProps> = ({
    onToggleSidebar,
    userAvatar = "/api/placeholder/32/32",
    userName = "Admin User"
}) => {
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const searchSuggestions = [
        'Products',
        'New orders',
        'Apple iphone',
        'Ahmed Hassan'
    ];

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'jp', name: '日本語', flag: '🇯🇵' },
        { code: 'cn', name: '中国人', flag: '🇨🇳' }
    ];

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logging out...');
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
                {/* Left side - Search */}
                <div className="flex items-center flex-1 max-w-md">
                    <button
                        onClick={onToggleSidebar}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-3"
                    >
                        <Menu size={20} className="text-gray-600" />
                    </button>

                    <div className="relative flex-1">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search term"
                                list="search_terms"
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="absolute right-2 p-1 hover:bg-gray-100 rounded">
                                <Search size={16} className="text-gray-500" />
                            </button>
                        </div>

                        <datalist id="search_terms">
                            {searchSuggestions.map((suggestion, index) => (
                                <option key={index} value={suggestion} />
                            ))}
                        </datalist>
                    </div>
                </div>

                {/* Right side - Navigation */}
                <div className="flex items-center space-x-2">
                    {/* Notifications */}
                    <div className="relative">
                        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                            <Bell size={20} className="text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>

                    {/* Dark mode toggle */}
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                        <Moon size={20} className="text-gray-600" />
                    </button>

                    {/* Fullscreen */}
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                        <Cast size={20} className="text-gray-600" />
                    </button>

                    {/* Language dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            <Globe size={20} className="text-gray-600" />
                        </button>

                        {showLanguageDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                                        onClick={() => setShowLanguageDropdown(false)}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="text-sm text-gray-700">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* User account dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                            className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-100"
                        >
                            <img
                                src={userAvatar}
                                alt={userName}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </button>

                        {showAccountDropdown && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                    <User size={16} className="text-gray-500" />
                                    <span className="text-sm text-gray-700">Edit Profile</span>
                                </button>

                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                    <Settings size={16} className="text-gray-500" />
                                    <span className="text-sm text-gray-700">Account Settings</span>
                                </button>

                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                    <Wallet size={16} className="text-gray-500" />
                                    <span className="text-sm text-gray-700">Wallet</span>
                                </button>

                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                    <Receipt size={16} className="text-gray-500" />
                                    <span className="text-sm text-gray-700">Billing</span>
                                </button>

                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3">
                                    <HelpCircle size={16} className="text-gray-500" />
                                    <span className="text-sm text-gray-700">Help Center</span>
                                </button>

                                <hr className="my-1 border-gray-200" />

                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3 text-red-600"
                                >
                                    <LogOut size={16} className="text-red-500" />
                                    <span className="text-sm">Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;