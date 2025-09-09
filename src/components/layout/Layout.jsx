// src/components/layout/Layout.jsx
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Button } from "/src/components/ui/button";
import { Menu, X } from "lucide-react";

export function Layout({ children }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Mobile sidebar overlay */}
            {mobileSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setMobileSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`
          fixed inset-y-0 left-0 z-50 flex-shrink-0 bg-white lg:static lg:z-auto
          transition-transform duration-300 ease-in-out lg:translate-x-0
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <Sidebar collapsed={sidebarCollapsed} />

                {/* Mobile close button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 lg:hidden"
                    onClick={() => setMobileSidebarOpen(false)}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />

                {/* Mobile menu button and sidebar toggle */}
                <div className="flex items-center justify-between border-b bg-white px-4 py-2 lg:justify-end">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden"
                        onClick={() => setMobileSidebarOpen(true)}
                    >
                        <Menu className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden lg:flex"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>

                {/* Page content */}
                <main className="flex-1 overflow-auto bg-gray-50 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}