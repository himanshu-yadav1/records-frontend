import { PageContainer } from "/src/components/layout/PageContainer";
import { PageHeader } from "/src/components/ui/page-header";
import { StatsGrid } from "/src/components/layout/StatsGrid";
import { ContentGrid } from "/src/components/layout/ContentGrid";
import { StatCard } from "/src/components/ui/stat-card";
import { DataList } from "/src/components/ui/data-list";
import { QuickActions } from "/src/components/ui/quick-actions";
import { StatusBadge } from "/src/components/ui/status-badge";
import {
    MessageSquare,
    Calendar,
    Users,
    Car,
    Clock,
    Plus,
    UserPlus
} from "lucide-react";

export function Dashboard() {
    const stats = [
        {
            title: "Total Enquiries",
            value: "24",
            change: "+3 today",
            icon: MessageSquare,
            iconColor: "text-blue-600"
        },
        {
            title: "Active Bookings",
            value: "12",
            change: "+2 this week",
            icon: Calendar,
            iconColor: "text-green-600"
        },
        {
            title: "Total Customers",
            value: "89",
            change: "+5 this month",
            icon: Users,
            iconColor: "text-purple-600"
        },
        {
            title: "Available Vehicles",
            value: "8",
            change: "2 on trip",
            changeType: "neutral",
            icon: Car,
            iconColor: "text-orange-600"
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

    const quickActions = [
        {
            title: "New Enquiry",
            description: "Create a new customer enquiry",
            icon: MessageSquare,
            onClick: () => console.log("New Enquiry")
        },
        {
            title: "New Booking",
            description: "Create a direct booking",
            icon: Calendar,
            onClick: () => console.log("New Booking")
        },
        {
            title: "Add Vehicle",
            description: "Register a new vehicle",
            icon: Car,
            onClick: () => console.log("Add Vehicle")
        },
        {
            title: "Add Driver",
            description: "Register a new driver",
            icon: UserPlus,
            onClick: () => console.log("Add Driver")
        }
    ];

    const renderEnquiryItem = (enquiry) => (
        <div className="flex items-center justify-between">
            <div className="space-y-1">
                <p className="font-medium text-sm">{enquiry.customer}</p>
                <p className="text-xs text-gray-600">{enquiry.phone}</p>
                <p className="text-xs text-gray-500">{enquiry.trip}</p>
            </div>
            <div className="text-right space-y-2">
                <StatusBadge status={enquiry.status} />
                <p className="text-xs text-gray-500 flex items-center justify-end">
                    <Clock className="h-3 w-3 mr-1" />
                    {enquiry.date}
                </p>
            </div>
        </div>
    );

    return (
        <PageContainer>
            <PageHeader
                title="Dashboard"
                subtitle="Welcome back! Here's what's happening with your business."
            />

            <StatsGrid cols={4}>
                {stats.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        changeType={stat.changeType}
                        icon={stat.icon}
                        iconColor={stat.iconColor}
                    />
                ))}
            </StatsGrid>

            <ContentGrid>
                <DataList
                    title="Recent Enquiries"
                    items={recentEnquiries}
                    renderItem={renderEnquiryItem}
                    emptyMessage="No recent enquiries"
                />

                <QuickActions actions={quickActions} />
            </ContentGrid>
        </PageContainer>
    );
}