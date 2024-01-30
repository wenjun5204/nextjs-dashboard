'use client'
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

export default function MyCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className='mt-10'>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow w-auto h-full jus"
      />
    </div>
  );
}
