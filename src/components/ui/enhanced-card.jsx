import { Card, CardContent, CardHeader, CardTitle } from "/src/components/ui/card";
import { cn } from "/src/lib/utils";

const cardTypes = {
    stats: "border-0 shadow-sm bg-gradient-to-r from-white to-gray-50",
    form: "shadow-sm border-gray-200",
    data: "border-0 shadow-sm hover:shadow-md transition-shadow",
    danger: "border-red-200 bg-red-50/50",
    warning: "border-orange-200 bg-orange-50/50",
    success: "border-green-200 bg-green-50/50",
};

export function EnhancedCard({
    type,
    title,
    subtitle,
    children,
    className,
    headerClassName,
    ...props
}) {
    return (
        <Card
            className={cn(
                type && cardTypes[type],
                className
            )}
            {...props}
        >
            {title && (
                <CardHeader className={cn("pb-3", headerClassName)}>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                        {title}
                    </CardTitle>
                    {subtitle && (
                        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
                    )}
                </CardHeader>
            )}
            <CardContent className={!title ? "pt-6" : ""}>
                {children}
            </CardContent>
        </Card>
    );
}