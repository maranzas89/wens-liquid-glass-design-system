import React from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle, Bell } from 'lucide-react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'default';
export type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

export interface AdvancedToast {
  id: string;
  variant: ToastVariant;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
  closable?: boolean;
}

interface GlassToastAdvancedProps {
  toast: AdvancedToast;
  onClose: (id: string) => void;
}

export function GlassToastAdvanced({ toast, onClose }: GlassToastAdvancedProps) {
  const variantStyles = {
    success: {
      border: 'border-[var(--status-success-border)]',
      bg: 'bg-[var(--status-success-light)]',
      icon: <CheckCircle size={20} className="text-[var(--status-success)]" />,
      iconBg: 'bg-[var(--status-success-light)]'
    },
    error: {
      border: 'border-[var(--status-error-border)]',
      bg: 'bg-[var(--status-error-light)]',
      icon: <AlertCircle size={20} className="text-[var(--status-error)]" />,
      iconBg: 'bg-[var(--status-error-light)]'
    },
    warning: {
      border: 'border-[var(--status-warning-border)]',
      bg: 'bg-[var(--status-warning-light)]',
      icon: <AlertTriangle size={20} className="text-[var(--status-warning)]" />,
      iconBg: 'bg-[var(--status-warning-light)]'
    },
    info: {
      border: 'border-[var(--status-info-border)]',
      bg: 'bg-[var(--status-info-light)]',
      icon: <Info size={20} className="text-[var(--status-info)]" />,
      iconBg: 'bg-[var(--status-info-light)]'
    },
    default: {
      border: 'border-[var(--glass-border)]',
      bg: 'bg-[var(--glass-bg-light)]',
      icon: <Bell size={20} className="text-white/80" />,
      iconBg: 'bg-[var(--glass-bg-medium)]'
    }
  };

  const style = variantStyles[toast.variant];
  const displayIcon = toast.icon || style.icon;

  return (
    <div className={`
      min-w-[320px] max-w-md
      backdrop-blur-xl backdrop-saturate-150
      ${style.bg}
      border-2 ${style.border}
      rounded-2xl
      p-4
      shadow-[var(--shadow-overlay)]
      animate-in slide-in-from-top-2 duration-300
    `}>
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`
          p-2 rounded-xl
          ${style.iconBg}
          flex-shrink-0
        `}>
          {displayIcon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="text-white font-semibold mb-1">
              {toast.title}
            </h4>
          )}
          <p className="text-white/90 text-sm">
            {toast.message}
          </p>
          
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="
                mt-3 px-4 py-1.5 rounded-lg
                bg-[var(--glass-bg-medium)]
                hover:bg-[var(--glass-bg-strong)]
                text-white text-sm font-medium
                transition-colors duration-200
              "
            >
              {toast.action.label}
            </button>
          )}
        </div>

        {/* Close Button */}
        {toast.closable !== false && (
          <button
            onClick={() => onClose(toast.id)}
            className="
              p-1.5 rounded-lg
              text-white/60
              hover:text-white
              hover:bg-[var(--glass-bg-light)]
              transition-all duration-200
              flex-shrink-0
            "
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

interface GlassToastAdvancedContainerProps {
  toasts: AdvancedToast[];
  onClose: (id: string) => void;
  position?: ToastPosition;
}

export function GlassToastAdvancedContainer({ 
  toasts, 
  onClose,
  position = 'top-right'
}: GlassToastAdvancedContainerProps) {
  const positionStyles = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
    'top-center': 'top-6 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2'
  };

  return (
    <div className={`fixed ${positionStyles[position]} z-50 space-y-3`}>
      {toasts.map((toast) => (
        <GlassToastAdvanced
          key={toast.id}
          toast={toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

// Hook for managing advanced toasts
export function useAdvancedToast() {
  const [toasts, setToasts] = React.useState<AdvancedToast[]>([]);

  const addToast = React.useCallback((
    variant: ToastVariant,
    message: string,
    options?: {
      title?: string;
      duration?: number;
      action?: { label: string; onClick: () => void };
      icon?: React.ReactNode;
      closable?: boolean;
    }
  ) => {
    const id = Math.random().toString(36).substring(7);
    const newToast: AdvancedToast = {
      id,
      variant,
      message,
      duration: options?.duration ?? 5000,
      title: options?.title,
      action: options?.action,
      icon: options?.icon,
      closable: options?.closable
    };

    setToasts(prev => [...prev, newToast]);

    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}
