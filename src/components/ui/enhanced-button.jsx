import { Button } from "/src/components/ui/button";
import { cn } from "/src/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    warning: "bg-orange-600 hover:bg-orange-700 text-white",
    info: "bg-cyan-600 hover:bg-cyan-700 text-white",
};

export function EnhancedButton({
    variant = "default",
    businessVariant,
    loading = false,
    children,
    className,
    disabled,
    ...props
}) {
    return (
        <Button
            variant={variant}
            disabled={disabled || loading}
            className={cn(
                businessVariant && buttonVariants[businessVariant],
                className
            )}
            {...props}
        >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </Button>
    );
}