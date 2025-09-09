import { EnhancedCard } from "./enhanced-card";
import { EnhancedButton } from "./enhanced-button";
import { Plus } from "lucide-react";

export function QuickActions({ actions = [], title = "Quick Actions" }) {
    return (
        <EnhancedCard title={title}>
            <div className="space-y-2">
                {actions.map((action, index) => (
                    <EnhancedButton
                        key={index}
                        variant="ghost"
                        className="w-full justify-start h-auto p-3 text-left"
                        onClick={action.onClick}
                    >
                        <div className="flex items-start space-x-3">
                            {action.icon && (
                                <action.icon className="h-5 w-5 mt-0.5 text-gray-600" />
                            )}
                            <div>
                                <div className="font-medium text-sm">{action.title}</div>
                                <div className="text-xs text-gray-600">{action.description}</div>
                            </div>
                        </div>
                    </EnhancedButton>
                ))}
            </div>
        </EnhancedCard>
    );
}