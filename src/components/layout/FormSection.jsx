import { EnhancedCard } from "/src/components/ui/enhanced-card";
import { cn } from "/src/lib/utils";

export function FormSection({
    title,
    subtitle,
    children,
    className,
    ...props
}) {
    return (
        <EnhancedCard
            type="form"
            title={title}
            subtitle={subtitle}
            className={cn("max-w-2xl", className)}
            {...props}
        >
            <div className="space-y-4">
                {children}
            </div>
        </EnhancedCard>
    );
}