import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

interface GlassAlertProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

export function GlassAlert({ variant, title, message, onClose, className = '' }: GlassAlertProps) {
  const variants = {
    info: {
      icon: Info,
      color: 'bg-[var(--status-info-light)]',
      borderColor: 'border-[var(--status-info-border)]',
      iconColor: 'text-[var(--status-info)]'
    },
    success: {
      icon: CheckCircle,
      color: 'bg-[var(--status-success-light)]',
      borderColor: 'border-[var(--status-success-border)]',
      iconColor: 'text-[var(--status-success)]'
    },
    warning: {
      icon: AlertCircle,
      color: 'bg-[var(--status-warning-light)]',
      borderColor: 'border-[var(--status-warning-border)]',
      iconColor: 'text-[var(--status-warning)]'
    },
    error: {
      icon: XCircle,
      color: 'bg-[var(--status-error-light)]',
      borderColor: 'border-[var(--status-error-border)]',
      iconColor: 'text-[var(--status-error)]'
    }
  };
  
  const config = variants[variant];
  const Icon = config.icon;
  
  return (
    <div className={`
      relative rounded-2xl
      backdrop-blur-md backdrop-saturate-150
      ${config.color}
      border ${config.borderColor}
      p-4
      ${className}
    `}>
      <div className="flex items-start gap-3">
        <Icon className={`${config.iconColor} flex-shrink-0 mt-0.5`} size={20} />
        <div className="flex-1 min-w-0">
          {title && <h4 className="text-white mb-1">{title}</h4>}
          <p className="text-white/90 text-sm">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
