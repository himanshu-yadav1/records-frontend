// src/components/layout/Header.jsx
import { Bell, User, LogOut, Settings } from "lucide-react";
import { Button } from "/src/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "/src/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "/src/components/ui/avatar";

export function Header() {
    const currentUser = {
        name: "Admin User",
        role: "Admin",
        initials: "AU"
    };

    return (
        <header className="border-b bg-white px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">TravelRecords</h1>
                    <p className="text-sm text-gray-600">Tour & Travel Management</p>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <Button variant="ghost" size="sm">
                        <Bell className="h-4 w-4" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>{currentUser.initials}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <div className="flex items-center justify-start gap-2 p-2">
                                <div className="flex flex-col space-y-1 leading-none">
                                    <p className="font-medium">{currentUser.name}</p>
                                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                                        {currentUser.role}
                                    </p>
                                </div>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}