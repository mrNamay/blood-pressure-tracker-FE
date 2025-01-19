import { Button } from "@/components/ui/button";
import { Heart, PlusCircle, History, Settings, LogOut, Menu, LayoutDashboard } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

interface INavItem {
    label: string;
    link?: string;
    icon: any;
    onCLick?: () => void
}

const Header = () => {

    const navItems: INavItem[] = [
        { label: 'Dashboard', link: "/app", icon: < LayoutDashboard className="h-5 w-5" /> },
        { label: 'Add Reading', link: "/app/add-reading", icon: <PlusCircle className="h-5 w-5" /> },
        { label: 'History', link: "/app/history", icon: <History className="h-5 w-5" /> },
        // { label: 'Settings', link: "/app/add-reading", icon: <Settings className="h-5 w-5" /> },
    ];

    const NavLinks = ({ className = "" }) => (
        <nav className={className}>
            {navItems.map((item) => (
                <Link key={item.label} to={item.link || ""} onClick={item.onCLick}>
                    <Button

                        variant="ghost"
                        className="flex items-center gap-2"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Button>
                </Link>
            ))}
        </nav>
    );

    return (
        <header className="border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Heart className="h-6 w-6 text-blue-600" />
                        <span className="text-xl font-bold text-gray-900">BPMonitor</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLinks className="flex items-center space-x-1" />
                        <div className="h-6 w-px bg-gray-200 mx-2" />
                        <Button variant="ghost" className="flex items-center gap-2 text-red-600">
                            <LogOut className="h-5 w-5" />
                            <span>Logout</span>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="w-64">
                                <div className="flex flex-col space-y-4 mt-6">
                                    <NavLinks
                                        className="flex flex-col space-y-2"
                                    />
                                    <div className="h-px bg-gray-200 my-2" />
                                    <Button
                                        variant="ghost"
                                        className="flex items-center gap-2 text-red-600 w-full justify-start"
                                    >
                                        <LogOut className="h-5 w-5" />
                                        <span>Logout</span>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;