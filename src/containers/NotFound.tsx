import { Button } from "@/components/ui/button";
import { MoveLeft, Search } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
                {/* Large 404 Number */}
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>

                {/* Error Messages */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for seems to have gone on a journey.
                    Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        variant="default"
                        size="lg"
                        className="flex items-center gap-2"
                    >
                        <MoveLeft className="h-5 w-5" />
                        Go Back Home
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="flex items-center gap-2"
                    >
                        <Search className="h-5 w-5" />
                        Search Site
                    </Button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12">
                    <p className="text-sm text-gray-600 mb-4">
                        You might want to check these pages:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-blue-600">
                        <a href="#" className="hover:underline">Help Center</a>
                        <span className="text-gray-300">•</span>
                        <a href="#" className="hover:underline">Contact Support</a>
                        <span className="text-gray-300">•</span>
                        <a href="#" className="hover:underline">Site Map</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;