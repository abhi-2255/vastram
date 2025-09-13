import React, { useState } from 'react';
import {
    DollarSign,
    Package,
    ShoppingCart,
    TrendingUp,
    FileText,
    Plus,
    Calendar,
    Filter,
    Eye,
    CreditCard,
    Users,
    Activity,
    BarChart3,
    PieChart
} from 'lucide-react';

interface DashboardMetric {
    title: string;
    value: string;
    subtitle: string;
    icon: React.ReactNode;
    bgColor: string;
    iconColor: string;
}

interface Order {
    id: string;
    orderId: string;
    customerName: string;
    date: string;
    total: number;
    status: 'Paid' | 'Chargeback' | 'Refund';
    paymentMethod: string;
}

const VastramAdminDashboard: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedDate, setSelectedDate] = useState('2024-09-13');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const dashboardMetrics: DashboardMetric[] = [
        {
            title: 'Revenue',
            value: '₹13,456.5',
            subtitle: 'Shipping fees are not included',
            icon: <DollarSign size={20} />,
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Orders',
            value: '53,668',
            subtitle: 'Excluding orders in transit',
            icon: <ShoppingCart size={20} />,
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            title: 'Products',
            value: '9,856',
            subtitle: 'In 19 Categories',
            icon: <Package size={20} />,
            bgColor: 'bg-yellow-100',
            iconColor: 'text-yellow-600'
        },
        {
            title: 'Monthly Earning',
            value: '₹6,982',
            subtitle: 'Based on your local time',
            icon: <TrendingUp size={20} />,
            bgColor: 'bg-cyan-100',
            iconColor: 'text-cyan-600'
        }
    ];

    const recentOrders: Order[] = [
        {
            id: '1',
            orderId: '#SK2540',
            customerName: 'Neal Matthews',
            date: '07 Oct, 2024',
            total: 400,
            status: 'Paid',
            paymentMethod: 'Mastercard'
        },
        {
            id: '2',
            orderId: '#SK2541',
            customerName: 'Jamal Burnett',
            date: '07 Oct, 2024',
            total: 380,
            status: 'Chargeback',
            paymentMethod: 'Visa'
        },
        {
            id: '3',
            orderId: '#SK2542',
            customerName: 'Juan Mitchell',
            date: '06 Oct, 2024',
            total: 384,
            status: 'Paid',
            paymentMethod: 'PayPal'
        },
        {
            id: '4',
            orderId: '#SK2543',
            customerName: 'Barry Dick',
            date: '05 Oct, 2024',
            total: 412,
            status: 'Paid',
            paymentMethod: 'Mastercard'
        },
        {
            id: '5',
            orderId: '#SK2544',
            customerName: 'Ronald Taylor',
            date: '04 Oct, 2024',
            total: 404,
            status: 'Refund',
            paymentMethod: 'Visa'
        }
    ];

    const newMembers = [
        {
            id: '1',
            name: 'Sadique',
            location: 'Idukki',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: '2',
            name: 'Rojin',
            location: 'Ernakulam',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: '3',
            name: 'Anand',
            location: 'Alappuzha',
            avatar: '/api/placeholder/40/40'
        }
    ];

    const recentActivities = [
        { id: '1', date: 'Today', activity: 'New order received from premium customer' },
        { id: '2', date: '17 May', activity: 'Product inventory updated successfully' },
        { id: '3', date: '13 May', activity: 'Customer support ticket resolved' },
        { id: '4', date: '05 April', activity: 'Monthly sales report generated' },
        { id: '5', date: '26 Mar', activity: 'New vendor partnership established' }
    ];

    const marketingChannels = [
        { name: 'Facebook', percentage: 15, color: 'bg-blue-500' },
        { name: 'Instagram', percentage: 65, color: 'bg-pink-500' },
        { name: 'Google', percentage: 51, color: 'bg-red-500' },
        { name: 'Twitter', percentage: 80, color: 'bg-blue-400' },
        { name: 'Other', percentage: 80, color: 'bg-gray-500' }
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Paid':
                return 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium';
            case 'Chargeback':
                return 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium';
            case 'Refund':
                return 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium';
            default:
                return 'bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium';
        }
    };

    const MetricCard: React.FC<{ metric: DashboardMetric }> = ({ metric }) => (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-start space-x-4">
                <div className={`${metric.bgColor} ${metric.iconColor} p-3 rounded-full`}>
                    {metric.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                    <p className="text-xs text-gray-500">{metric.subtitle}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
                        <p className="text-gray-600">Whole data about your business here</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                        <FileText size={16} />
                        <span>Create report</span>
                    </button>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {dashboardMetrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} />
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                    {/* Sales Statistics Chart */}
                    <div className="xl:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                            <h3 className="text-lg font-semibold mb-4">Sale Statistics</h3>
                            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <BarChart3 size={48} className="text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Chart component would go here</p>
                                    <p className="text-xs text-gray-400">Integration with Chart.js or similar</p>
                                </div>
                            </div>
                        </div>

                        {/* New Members and Recent Activities */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* New Members */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <h3 className="text-lg font-semibold mb-4">New Members</h3>
                                <div className="space-y-4">
                                    {newMembers.map((member) => (
                                        <div key={member.id} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-900">{member.name}</p>
                                                    <p className="text-sm text-gray-500">{member.location}</p>
                                                </div>
                                            </div>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1">
                                                <Plus size={12} />
                                                <span>Add</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Activities */}
                            <div className="bg-white rounded-lg shadow-sm border p-6">
                                <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                                <div className="space-y-4">
                                    {recentActivities.map((activity) => (
                                        <div key={activity.id} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                            <div>
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <span className="text-sm font-medium text-gray-900">{activity.date}</span>
                                                    <TrendingUp size={14} className="text-blue-500" />
                                                </div>
                                                <p className="text-sm text-gray-600">{activity.activity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* Revenue by Area Chart */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="text-lg font-semibold mb-4">Revenue Base on Area</h3>
                            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <PieChart size={40} className="text-gray-400 mx-auto mb-2" />
                                    <p className="text-sm text-gray-500">Pie Chart</p>
                                </div>
                            </div>
                        </div>

                        {/* Marketing Channels */}
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h3 className="text-lg font-semibold mb-4">Marketing Channel</h3>
                            <div className="space-y-4">
                                {marketingChannels.map((channel, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600">{channel.name}</span>
                                            <span className="font-medium">{channel.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${channel.color} h-2 rounded-full transition-all duration-300`}
                                                style={{ width: `${channel.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Orders Table */}
                <div className="bg-white rounded-lg shadow-sm border">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                            <h3 className="text-lg font-semibold">Latest Orders</h3>
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="clothing">Clothing</option>
                                    <option value="shoes">Shoes</option>
                                    <option value="accessories">Accessories</option>
                                </select>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">All Status</option>
                                    <option value="paid">Paid</option>
                                    <option value="chargeback">Chargeback</option>
                                    <option value="refund">Refund</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="font-medium text-blue-600 hover:text-blue-800">{order.orderId}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {order.customerName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {order.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            ₹{order.total}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={getStatusBadge(order.status)}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex items-center space-x-1">
                                                <CreditCard size={16} className="text-gray-400" />
                                                <span>{order.paymentMethod}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition-colors flex items-center space-x-1">
                                                <Eye size={14} />
                                                <span>View details</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VastramAdminDashboard;