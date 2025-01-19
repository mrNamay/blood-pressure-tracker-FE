import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Heart, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const onBoardUser = () => {
    /** TODO: check user logged in status */
    const isLoggedIn = false;
    if (isLoggedIn) {
      /** naviate to app */
      navigate("/app")
    } else {
      navigate("/auth/login")
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BPMonitor</span>
          </div>
          <nav className="flex space-x-4">
            <Link to="/auth/login"><Button variant="ghost">Login</Button></Link>
            <Link to="/auth/login"><Button>Sign Up</Button></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Monitor Your Blood Pressure with Ease
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take control of your health with our simple and intuitive blood pressure tracking solution.
        </p>
        <Button onClick={() => onBoardUser()} size="lg" className="px-8 py-6 text-lg">
          Get Started
        </Button>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Why Choose BPMonitor?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 hover:border-blue-500 transition-all duration-300">
            <CardHeader className="text-center">
              <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Track Your Readings</CardTitle>
              <CardDescription className="text-base mt-2">
                Easily log and monitor your blood pressure readings in one secure place.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all duration-300">
            <CardHeader className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Monitor Trends</CardTitle>
              <CardDescription className="text-base mt-2">
                Visualize your health patterns with intuitive graphs and insights.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-all duration-300">
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Stay Healthy</CardTitle>
              <CardDescription className="text-base mt-2">
                Make informed decisions about your health with detailed analysis and recommendations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;