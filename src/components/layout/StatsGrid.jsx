import { cn } from "/src/lib/utils";

export function StatsGrid({ children, className, cols = 4, ...props }) {
    const gridCols = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    };

    return (
        <div
            className={cn(
                "grid gap-4",
                gridCols[cols] || gridCols[4],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}