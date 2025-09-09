import { Badge } from "/src/components/ui/badge";
import { cn } from "/src/lib/utils";

const statusStyles = {
    // Enquiry statuses
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    converted: "bg-green-100 text-green-800 hover:bg-green-200",
    cancelled: "bg-red-100 text-red-800 hover:bg-red-200",

    // Booking statuses
    confirmed: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    ongoing: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    completed: "bg-green-100 text-green-800 hover:bg-green-200",

    // Payment statuses
    paid: "bg-green-100 text-green-800 hover:bg-green-200",
    unpaid: "bg-red-100 text-red-800 hover:bg-red-200",
    partial: "bg-orange-100 text-orange-800 hover:bg-orange-200",

    // Vehicle statuses
    available: "bg-green-100 text-green-800 hover:bg-green-200",
    ontrip: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    maintenance: "bg-orange-100 text-orange-800 hover:bg-orange-200",
    inactive: "bg-gray-100 text-gray-800 hover:bg-gray-200",
};

export function StatusBadge({ status, className, ...props }) {
    return (
        <Badge
            className={cn(
                "font-medium border-0",
                statusStyles[status] || statusStyles.pending,
                className
            )}
            {...props}
        >
            {status?.charAt(0).toUpperCase() + status?.slice(1)}
        </Badge>
    );
}