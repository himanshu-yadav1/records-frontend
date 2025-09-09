import { cn } from "/src/lib/utils";

export function PageContainer({ children, className, ...props }) {
    return (
        <div className={cn("space-y-6", className)} {...props}>
            {children}
        </div>
    );
}