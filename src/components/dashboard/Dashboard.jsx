// src/components/dashboard/Dashboard.jsx
import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card";
import { Badge } from "/src/components/ui/badge";
import {
    MessageSquare,
    Calendar,
    Users,
    Car,
    TrendingUp,
    Clock
} from "lucide-react";

export function Dashboard() {
    const stats = [
        {
            title: "Total Enquiries",
            value: "24",
            change: "+3 today",
            icon: MessageSquare,
            color: "text-blue-600"
        },
        {
            title: "Active Bookings",
            value: "12",
            change: "+2 this week",
            icon: Calendar,
            color: "text-green-600"
        },
        {
            title: "Total Customers",
            value: "89",
            change: "+5 this month",
            icon: Users,
            color: "text-purple-600"
        },
        {
            title: "Available Vehicles",
            value: "8",
            change: "2 on trip",
            icon: Car,
            color: "text-orange-600"
        }
    ];

    const recentEnquiries = [
        {
            id: 1,
            customer: "John Doe",
            phone: "+91 9876543210",
            trip: "Delhi - Manali - Delhi",
            date: "2025-09-15",
            status: "pending"
        },
        {
            id: 2,
            customer: "Jane Smith",
            phone: "+91 9876543211",
            trip: "Mumbai - Goa - Mumbai",
            date: "2025-09-20",
            status: "converted"
        },
        {
            id: 3,
            customer: "Mike Johnson",
            phone: "+91 9876543212",
            trip: "Chennai - Bangalore",
            date: "2025-09-18",
            status: "pending"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'converted': return 'bg-green-100 text-green-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your business.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    {stat.title}
                                </CardTitle>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-gray-600 flex items-center mt-1">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    {stat.change}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Recent Activity */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Enquiries */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <MessageSquare className="h-5 w-5 mr-2" />
                            Recent Enquiries
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentEnquiries.map((enquiry) => (
                                <div key={enquiry.id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="space-y-1">
                                        <p className="font-medium text-sm">{enquiry.customer}</p>
                                        <p className="text-xs text-gray-600">{enquiry.phone}</p>
                                        <p className="text-xs text-gray-500">{enquiry.trip}</p>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <Badge className={getStatusColor(enquiry.status)}>
                                            {enquiry.status}
                                        </Badge>
                                        <p className="text-xs text-gray-500 flex items-center">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {enquiry.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="font-medium text-sm">New Enquiry</div>
                                <div className="text-xs text-gray-600">Create a new customer enquiry</div>
                            </button>
                            <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="font-medium text-sm">New Booking</div>
                                <div className="text-xs text-gray-600">Create a direct booking</div>
                            </button>
                            <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="font-medium text-sm">Add Vehicle</div>
                                <div className="text-xs text-gray-600">Register a new vehicle</div>
                            </button>
                            <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                                <div className="font-medium text-sm">Add Driver</div>
                                <div className="text-xs text-gray-600">Register a new driver</div>
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}