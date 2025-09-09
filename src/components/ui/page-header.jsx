import { cn } from "/src/lib/utils";

export function PageHeader({
    title,
    subtitle,
    children,
    className,
    ...props
}) {
    return (
        <div className={cn("space-y-4", className)} {...props}>
            <div className="space-y-1">
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                {subtitle && (
                    <p className="text-gray-600">{subtitle}</p>
                )}
            </div>
            {children && (
                <div className="flex items-center justify-between">
                    {children}
                </div>
            )}
        </div>
    );
}