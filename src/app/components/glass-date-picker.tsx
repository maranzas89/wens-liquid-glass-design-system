import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface GlassDatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
}

export function GlassDatePicker({ value, onChange, placeholder = 'MM/DD/YYYY', className = '' }: GlassDatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value);
  const [currentDate, setCurrentDate] = React.useState(value || new Date());
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        // Also check if click is inside the portal dropdown
        const portal = document.getElementById('glass-datepicker-portal');
        if (portal && portal.contains(e.target as Node)) return;
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left,
      });
    }
  }, [isOpen]);

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

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

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
    setIsOpen(false);
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
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const formatDate = (date?: Date) => {
    if (!date) return '';
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input trigger */}
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-[var(--glass-bg-light)]
          border border-[var(--glass-border)]
          px-4 py-3 pl-12
          text-white
          outline-none
          hover:bg-[var(--glass-bg-medium)] hover:border-[var(--glass-border-strong)]
          transition-all duration-300
          select-none
        "
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none">
          <Calendar size={20} />
        </div>
        <span className={selectedDate ? 'text-white' : 'text-[var(--text-placeholder)]'}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
      </div>

      {/* Calendar dropdown - rendered via portal */}
      {isOpen && ReactDOM.createPortal(
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          <div
            id="glass-datepicker-portal"
            style={{ position: 'fixed', top: dropdownPos.top, left: dropdownPos.left }}
            className="
              z-[9999]
              w-[320px]
              backdrop-blur-xl backdrop-saturate-150
              bg-[var(--overlay-popover)]
              border border-[var(--glass-border)]
              rounded-2xl
              p-5
              shadow-[var(--shadow-overlay)]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={previousMonth}
                className="
                  p-2 rounded-xl
                  hover:bg-[var(--glass-bg-light)]
                  transition-colors duration-200
                  text-white
                "
              >
                <ChevronLeft size={18} />
              </button>
              <h3 className="text-white text-sm">
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
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-1 mb-1">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-[var(--text-placeholder)] text-xs py-1.5">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
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
                      aspect-square rounded-lg
                      flex items-center justify-center
                      text-sm transition-all duration-200
                      ${isSelected(day)
                        ? 'bg-gradient-to-br from-[var(--status-info-light)] to-[var(--brand-secondary)] text-white border border-[var(--status-info-border)] shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                        : isToday(day)
                        ? 'bg-[var(--glass-bg-medium)] text-white ring-1 ring-[var(--glass-border-strong)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--glass-bg-light)] hover:text-white'
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-[var(--glass-dark-border)] flex items-center justify-between">
              <button
                onClick={() => {
                  const today = new Date();
                  setCurrentDate(today);
                  setSelectedDate(today);
                  onChange?.(today);
                  setIsOpen(false);
                }}
                className="text-xs text-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors"
              >
                Today
              </button>
              {selectedDate && (
                <button
                  onClick={() => {
                    setSelectedDate(undefined);
                    onChange?.(undefined as any);
                  }}
                  className="text-xs text-[var(--text-disabled)] hover:text-[var(--text-muted)] transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}