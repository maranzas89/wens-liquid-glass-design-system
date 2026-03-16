import React from 'react';
import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

interface Toast {
  id: string;
  variant: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

interface GlassToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

export function GlassToast({ toast, onClose }: GlassToastProps) {
  const variants = {
    success: {
      icon: CheckCircle,
      color: 'from-green-400/20 to-teal-400/20',
      borderColor: 'border-green-400/30',
      iconColor: 'text-green-300'
    },
    error: {
      icon: XCircle,
      color: 'from-red-400/20 to-pink-400/20',
      borderColor: 'border-red-400/30',
      iconColor: 'text-red-300'
    },
    warning: {
      icon: AlertCircle,
      color: 'from-amber-400/20 to-orange-400/20',
      borderColor: 'border-amber-400/30',
      iconColor: 'text-amber-300'
    },
    info: {
      icon: Info,
      color: 'from-blue-400/20 to-cyan-400/20',
      borderColor: 'border-blue-400/30',
      iconColor: 'text-blue-300'
    }
  };
  
  const config = variants[toast.variant];
  const Icon = config.icon;
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose(toast.id);
    }, toast.duration || 3000);
    
    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onClose]);
  
  return (
    <div className={`
      backdrop-blur-xl backdrop-saturate-150
      bg-gradient-to-r ${config.color}
      border ${config.borderColor}
      rounded-2xl
      p-4
      shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
      flex items-center gap-3
      min-w-[300px]
      animate-in slide-in-from-right duration-300
    `}>
      <Icon className={config.iconColor} size={20} />
      <p className="flex-1 text-white">{toast.message}</p>
      <button
        onClick={() => onClose(toast.id)}
        className="text-white/60 hover:text-white transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

export function GlassToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      {toasts.map((toast) => (
        <GlassToast key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  
  const addToast = (variant: Toast['variant'], message: string, duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, variant, message, duration }]);
  };
  
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  
  return { toasts, addToast, removeToast };
}
