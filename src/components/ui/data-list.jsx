import { EnhancedCard } from "./enhanced-card";
import { cn } from "/src/lib/utils";

export function DataList({
    title,
    items = [],
    renderItem,
    emptyMessage = "No items found",
    className,
    ...props
}) {
    return (
        <EnhancedCard
            type="data"
            title={title}
            className={className}
            {...props}
        >
            {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    {emptyMessage}
                </div>
            ) : (
                <div className="space-y-3">
                    {items.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>
            )}
        </EnhancedCard>
    );
}