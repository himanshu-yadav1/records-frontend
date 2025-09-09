import { cn } from "/src/lib/utils";

export function ContentGrid({ children, className }) {
    return (
        <div className={cn("grid gap-6 md:grid-cols-2", className)}>
            {children}
        </div>
    );
}
