import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface BloodPressureReading {
    systolic: number;
    diastolic: number;
}

const Dashboard: React.FC = () => {
    const [name, setName] = useState('John Doe'); // Replace with actual user name
    const [lastReading, setLastReading] = useState<BloodPressureReading | null>(null);
    const [averageBp, setAverageBp] = useState<BloodPressureReading | null>(null);
    const [highestBp, setHighestBp] = useState<BloodPressureReading | null>(null);
    const [lowestBp, setLowestBp] = useState<BloodPressureReading | null>(null);

    useEffect(() => {
        // Fetch user data and blood pressure readings from API or local storage
        // Update state variables accordingly
    }, []);

    const handleAddReading = () => {
        // Navigate to reading entry form
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Welcome, {name}</h1>
            <p className="leading-7 mt-6">Your Last Reading: {lastReading ? `${lastReading.systolic}/${lastReading.diastolic} mmHg` : 'N/A'}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Average Blood Pressure (This Month)</CardTitle>
                        <CardDescription>
                            <p>{averageBp ? `${averageBp.systolic}/${averageBp.diastolic} mmHg` : 'N/A'}</p>
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Highest Reading</CardTitle>
                        <CardDescription className="text-base mt-2">
                            <p>{highestBp ? `${highestBp.systolic}/${highestBp.diastolic} mmHg` : 'N/A'}</p>
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Lowest Reading</CardTitle>
                        <CardDescription className="text-base mt-2">
                            <p>{lowestBp ? `${lowestBp.systolic}/${lowestBp.diastolic} mmHg` : 'N/A'}</p>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <Link to={"/app/add-reading"}>
                <Button className="mt-6">Add Reading Now</Button>
            </Link>
        </div>
    );
};

export default Dashboard;
