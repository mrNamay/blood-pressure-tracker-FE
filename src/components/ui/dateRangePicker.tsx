"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerWithRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    initialFromDate?: Date
    initialToDate?: Date
    onChange?: (date: DateRange | undefined) => void
    placeholder?: string
}

export function DatePickerWithRange({
    className,
    initialFromDate = new Date(2022, 0, 20),
    initialToDate = addDays(new Date(2022, 0, 20), 20),
    onChange,
    placeholder = "Pick a date",
}: DatePickerWithRangeProps) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: initialFromDate,
        to: initialToDate,
    })

    const handleDateSelect = (selectedDate: DateRange | undefined) => {
        setDate(selectedDate)
        onChange?.(selectedDate) // Pass the selected date to the parent component
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={handleDateSelect}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
