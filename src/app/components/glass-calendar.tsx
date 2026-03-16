import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GlassCalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

export function GlassCalendar({ value, onChange, className = '' }: GlassCalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(value || new Date());
  const [selectedDate, setSelectedDate] = React.useState(value || new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newDate);
    onChange?.(newDate);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className={`
      backdrop-blur-md backdrop-saturate-150
      bg-[var(--glass-bg-light)]
      border border-[var(--glass-border)]
      rounded-3xl
      p-6
      ${className}
    `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={previousMonth}
          className="
            p-2 rounded-xl
            hover:bg-[var(--glass-bg-light)]
            transition-colors duration-200
            text-white
          "
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button
          onClick={nextMonth}
          className="
            p-2 rounded-xl
            hover:bg-[var(--glass-bg-light)]
            transition-colors duration-200
            text-white
          "
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-[var(--text-muted)] text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`
                aspect-square rounded-xl
                flex items-center justify-center
                text-sm transition-all duration-200
                ${isSelected(day)
                  ? 'bg-blue-500/30 text-white border-2 border-[var(--status-info-border)]'
                  : isToday(day)
                  ? 'bg-[var(--glass-bg-medium)] text-white'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--glass-bg-light)] hover:text-white'
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}