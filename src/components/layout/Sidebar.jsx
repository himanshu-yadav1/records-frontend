// src/components/layout/Sidebar.jsx
import {
    LayoutDashboard,
    MessageSquare,
    Calendar,
    Users,
    Car,
    UserCheck,
    Handshake,
    UserPlus,
    Receipt,
    CreditCard,
    BarChart3,
    ChevronRight
} from "lucide-react";
import { cn } from "/src/lib/utils";
import { Button } from "/src/components/ui/button";
import { useState } from "react";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Enquiries",
        href: "/enquiries",
        icon: MessageSquare,
        badge: "3", // Example badge
    },
    {
        name: "Bookings",
        href: "/bookings",
        icon: Calendar,
    },
    {
        name: "Customers",
        href: "/customers",
        icon: Users,
    },
    {
        name: "Vehicles",
        href: "/vehicles",
        icon: Car,
    },
    {
        name: "Drivers",
        href: "/drivers",
        icon: UserCheck,
    },
    {
        name: "Partners",
        href: "/partners",
        icon: Handshake,
    },
    {
        name: "Agents",
        href: "/agents",
        icon: UserPlus,
    },
    {
        name: "Expenses",
        href: "/expenses",
        icon: Receipt,
    },
    {
        name: "Payments",
        href: "/payments",
        icon: CreditCard,
    },
    {
        name: "Reports",
        href: "/reports",
        icon: BarChart3,
    },
];

export function Sidebar({ collapsed = false }) {
    const [activeItem, setActiveItem] = useState("/dashboard");

    return (
        <div
            className={cn(
                "flex flex-col border-r bg-gray-50/40 transition-all duration-300",
                collapsed ? "w-16" : "w-64"
            )}
        >
            <div className="flex-1 overflow-auto py-4">
                <nav className="space-y-1 px-3">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeItem === item.href;

                        return (
                            <Button
                                key={item.name}
                                variant={isActive ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start h-10 px-3",
                                    collapsed && "px-2 justify-center",
                                    isActive && "bg-secondary font-medium"
                                )}
                                onClick={() => setActiveItem(item.href)}
                            >
                                <Icon className="h-4 w-4 flex-shrink-0" />
                                {!collapsed && (
                                    <>
                                        <span className="ml-3 flex-1 text-left">{item.name}</span>
                                        {item.badge && (
                                            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                                                {item.badge}
                                            </span>
                                        )}
                                    </>
                                )}
                            </Button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}