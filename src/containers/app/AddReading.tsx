import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface IReading {
    systolic: number,
    diastolic: number,
    pulse: number,
    datetime: Date
}

const AddReadingPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IReading>({
        defaultValues: {
            datetime: new Date()
        }
    });

    const onSubmit = (data: IReading) => {
        console.log('Reading submitted:', data);
        // Handle form submission
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Add Blood Pressure Reading</CardTitle>
                        <CardDescription>
                            Record your blood pressure and pulse measurements
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Systolic Pressure */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="systolic">Systolic Pressure</Label>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Info className="h-4 w-4 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="max-w-xs">
                                                        Systolic pressure is the top number that measures the force of blood against artery walls when your heart beats.
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <Input
                                        id="systolic"
                                        type="number"
                                        placeholder="120"
                                        {...register("systolic", {
                                            required: "Systolic is required",
                                            min: {
                                                value: 50,
                                                message: "Systolic should be between 50-250 mmHg",
                                            },
                                            max: {
                                                value: 250,
                                                message: "Systolic should be between 50-250 mmHg",
                                            },
                                        })}
                                        className={errors.systolic ? 'border-red-500' : ''}
                                    />
                                    {errors.systolic && (
                                        <p className="text-sm text-red-500">{errors.systolic.message}</p>
                                    )}
                                </div>

                                {/* Diastolic Pressure */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="diastolic">Diastolic Pressure</Label>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Info className="h-4 w-4 text-gray-400" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="max-w-xs">
                                                        Diastolic pressure is the bottom number that measures the force of blood against artery walls between heart beats.
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <Input
                                        id="diastolic"
                                        type="number"
                                        placeholder="80"
                                        {...register("diastolic", {
                                            required: "Diastolic is required",
                                            min: {
                                                value: 40,
                                                message: "Diastolic should be between 30-150 mmHg",
                                            },
                                            max: {
                                                value: 130,
                                                message: "Diastolic should be between 30-150 mmHg",
                                            },
                                        })}
                                        className={errors.diastolic ? 'border-red-500' : ''}
                                    />
                                    {errors.diastolic && (
                                        <p className="text-sm text-red-500">{errors.diastolic.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Pulse Rate */}
                            <div className="space-y-2">
                                <Label htmlFor="pulse">Pulse Rate (BPM)</Label>
                                <Input
                                    id="pulse"
                                    type="number"
                                    placeholder="72"
                                    {...register("pulse", {
                                        required: "Pulse rate is required",
                                        min: {
                                            value: 30,
                                            message: "Pulse should be between 30-200 BPM",
                                        },
                                        max: {
                                            value: 200,
                                            message: "Pulse should be between 30-200 BPM",
                                        },
                                    })}
                                    className={errors.pulse ? 'border-red-500' : ''}
                                />
                                {errors.pulse && (
                                    <p className="text-sm text-red-500">{errors.pulse.message}</p>
                                )}
                            </div>

                            {/* Date and Time */}
                            <div className="space-y-2">
                                <Label htmlFor="datetime">Date & Time</Label>
                                <Input
                                    id="datetime"
                                    type="datetime-local"
                                    {...register("datetime", { required: "Date and time are required" })}
                                    className={errors.datetime ? 'border-red-500' : ''}
                                />
                                {errors.datetime && (
                                    <p className="text-sm text-red-500">{errors.datetime.message}</p>
                                )}
                            </div>

                            <Button type="submit" className="w-full">
                                Save Reading
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddReadingPage;
