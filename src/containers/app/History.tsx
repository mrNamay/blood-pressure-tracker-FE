import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, ListFilter, BarChart3, TableIcon } from 'lucide-react';
import { DatePickerWithRange } from '../../components/ui/dateRangePicker';

interface Reading {
  id: number;
  date: string;
  systolic: number;
  diastolic: number;
  pulse: number;
  notes: string;
}

const HistoryPage: React.FC = () => {
  const [view, setView] = useState<'table' | 'chart'>('table');
  const [selectedReading, setSelectedReading] = useState<Reading | null>(null);
  const [dateRange, setDateRange] = useState<'7days' | '30days' | '90days' | 'custom'>('7days');
  const [customRange, setCustomRange] = useState<{ startDate?: Date, endDate?: Date }>({});

  // Sample data - replace with actual data
  const readings: Reading[] = [
    { id: 1, date: '2024-01-19 09:00', systolic: 120, diastolic: 80, pulse: 72, notes: 'Morning reading' },
    { id: 2, date: '2024-01-18 09:30', systolic: 118, diastolic: 79, pulse: 70, notes: 'After exercise' },
    { id: 3, date: '2024-01-17 10:00', systolic: 122, diastolic: 82, pulse: 74, notes: 'Before medication' },
    // Add more sample data...
  ];



  interface DetailDialogProps {
    reading: Reading | null;
    open: boolean;
    onClose: () => void;
  }

  const DetailDialog: React.FC<DetailDialogProps> = ({ reading, open, onClose }) => {
    if (!reading) return null;

    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Reading Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">{new Date(reading.date).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Pressure</p>
                <p className="font-medium">{reading.systolic}/{reading.diastolic} mmHg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Pulse</p>
                <p className="font-medium">{reading.pulse} BPM</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Notes</p>
              <p className="font-medium">{reading.notes}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Blood Pressure History</h1>

        <div className="flex flex-wrap gap-4">
          {/* Date Range Filter */}
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>

          {/* Custom Range Input */}
          {dateRange === 'custom' && (
            <DatePickerWithRange onChange={(data) => {
              if (data) {
                setCustomRange({ endDate: data.to, startDate: data.from })
              } else {
                setCustomRange({})
              }
            }} />
          )}

          {/* View Toggle */}
          <div className="flex gap-2">
            <Button
              variant={view === 'table' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setView('table')}
            >
              <TableIcon className="h-4 w-4" />
            </Button>
            <Button
              variant={view === 'chart' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setView('chart')}
            >
              <BarChart3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardContent className="p-6">
          {view === 'table' ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Systolic</TableHead>
                    <TableHead>Diastolic</TableHead>
                    <TableHead>Pulse</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {readings.map((reading) => (
                    <TableRow key={reading.id}>
                      <TableCell>{new Date(reading.date).toLocaleString()}</TableCell>
                      <TableCell>{reading.systolic}</TableCell>
                      <TableCell>{reading.diastolic}</TableCell>
                      <TableCell>{reading.pulse}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedReading(reading)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={readings}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => new Date(date).toLocaleDateString()}
                  />
                  <YAxis />
                  <Tooltip
                    labelFormatter={(date) => new Date(date).toLocaleString()}
                    formatter={(value, name) => [`${value} ${name === 'pulse' ? 'BPM' : 'mmHg'}`, name]}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="systolic" stroke="#2563eb" name="Systolic" />
                  <Line type="monotone" dataKey="diastolic" stroke="#7c3aed" name="Diastolic" />
                  <Line type="monotone" dataKey="pulse" stroke="#dc2626" name="Pulse" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Details Dialog */}
      <DetailDialog
        reading={selectedReading}
        open={!!selectedReading}
        onClose={() => setSelectedReading(null)}
      />
    </div>
  );
};

export default HistoryPage;
