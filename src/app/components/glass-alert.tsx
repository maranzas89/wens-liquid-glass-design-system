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
      color: 'from-blue-400/20 to-cyan-400/20',
      borderColor: 'border-blue-400/30',
      iconColor: 'text-blue-300'
    },
    success: {
      icon: CheckCircle,
      color: 'from-green-400/20 to-teal-400/20',
      borderColor: 'border-green-400/30',
      iconColor: 'text-green-300'
    },
    warning: {
      icon: AlertCircle,
      color: 'from-amber-400/20 to-orange-400/20',
      borderColor: 'border-amber-400/30',
      iconColor: 'text-amber-300'
    },
    error: {
      icon: XCircle,
      color: 'from-red-400/20 to-pink-400/20',
      borderColor: 'border-red-400/30',
      iconColor: 'text-red-300'
    }
  };
  
  const config = variants[variant];
  const Icon = config.icon;
  
  return (
    <div className={`
      relative rounded-2xl
      backdrop-blur-md backdrop-saturate-150
      bg-gradient-to-r ${config.color}
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
