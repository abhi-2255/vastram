import React from 'react';

interface FooterProps {
    companyName?: string;
    className?: string;
}

const AdminFooter: React.FC<FooterProps> = ({
    companyName = "InstyleSoles - The Complete Shoe Stores",
    className = ""
}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-white border-t border-gray-200 mt-auto ${className}`}>
            <div className="px-6 py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Left side - Copyright */}
                    <div className="text-sm text-gray-600">
                        © {currentYear} {companyName}
                    </div>

                    {/* Right side - Rights reserved */}
                    <div className="text-sm text-gray-600">
                        All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AdminFooter;