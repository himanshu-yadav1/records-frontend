import { EnhancedCard } from "./enhanced-card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "/src/lib/utils";

export function StatCard({
    title,
    value,
    change,
    changeType = "positive",
    icon: Icon,
    iconColor = "text-blue-600",
    className,
    ...props
}) {
    const isPositive = changeType === "positive";

    return (
        <EnhancedCard
            type="stats"
            className={cn("relative overflow-hidden", className)}
            {...props}
        >
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    {change && (
                        <p className={cn(
                            "text-sm flex items-center",
                            isPositive ? "text-green-600" : "text-red-600"
                        )}>
                            {isPositive ?
                                <TrendingUp className="h-3 w-3 mr-1" /> :
                                <TrendingDown className="h-3 w-3 mr-1" />
                            }
                            {change}
                        </p>
                    )}
                </div>
                {Icon && (
                    <div className={cn("p-3 rounded-full bg-gray-50", iconColor)}>
                        <Icon className="h-6 w-6" />
                    </div>
                )}
            </div>
        </EnhancedCard>
    );
}