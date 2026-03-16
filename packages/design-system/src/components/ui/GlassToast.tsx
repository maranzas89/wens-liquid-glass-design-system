import React, { useState, useCallback, useEffect } from 'react';
import { cn } from '../../lib/cn';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'default';

export type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center';

export interface Toast {
  id: string;
  variant: ToastVariant;
  title?: string;
  message: string;
  /** Auto-dismiss after ms. 0 = persist. Default 5000. */
  duration?: number;
  action?: { label: string; onClick: () => void };
  /** Custom leading icon. */
  icon?: React.ReactNode;
  /** Show close button. Default true. */
  closable?: boolean;
}

export interface GlassToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

export interface GlassToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
  position?: ToastPosition;
}

// ---------------------------------------------------------------------------
// Built-in SVG icons (no external dep required)
// ---------------------------------------------------------------------------

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function IconAlert(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx={12} cy={12} r={10} />
      <line x1={12} x2={12} y1={8} y2={12} />
      <line x1={12} x2={12.01} y1={16} y2={16} />
    </svg>
  );
}

function IconInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx={12} cy={12} r={10} />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Variant config
// ---------------------------------------------------------------------------

interface VariantConfig {
  bg: string;
  border: string;
  iconColor: string;
  iconBg: string;
  defaultIcon: React.ReactNode;
}

const variants: Record<ToastVariant, VariantConfig> = {
  success: {
    bg: 'bg-green-500/20',
    border: 'border-green-400/50',
    iconColor: 'text-green-300',
    iconBg: 'bg-green-500/30',
    defaultIcon: <IconCheck className="text-green-300" />,
  },
  error: {
    bg: 'bg-red-500/20',
    border: 'border-red-400/50',
    iconColor: 'text-red-300',
    iconBg: 'bg-red-500/30',
    defaultIcon: <IconAlert className="text-red-300" />,
  },
  warning: {
    bg: 'bg-amber-500/20',
    border: 'border-amber-400/50',
    iconColor: 'text-amber-300',
    iconBg: 'bg-amber-500/30',
    defaultIcon: <IconAlert className="text-amber-300" />,
  },
  info: {
    bg: 'bg-blue-500/20',
    border: 'border-blue-400/50',
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-500/30',
    defaultIcon: <IconInfo className="text-blue-300" />,
  },
  default: {
    bg: 'bg-white/10',
    border: 'border-white/20',
    iconColor: 'text-white/80',
    iconBg: 'bg-white/20',
    defaultIcon: <IconBell className="text-white/80" />,
  },
};

// ---------------------------------------------------------------------------
// Single toast
// ---------------------------------------------------------------------------

export function GlassToast({ toast, onClose }: GlassToastProps) {
  const config = variants[toast.variant];
  const displayIcon = toast.icon || config.defaultIcon;

  useEffect(() => {
    const ms = toast.duration ?? 5000;
    if (ms <= 0) return;
    const timer = setTimeout(() => onClose(toast.id), ms);
    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onClose]);

  return (
    <div
      className={cn(
        'min-w-[320px] max-w-md',
        'backdrop-blur-xl backdrop-saturate-150',
        config.bg,
        'border-2',
        config.border,
        'rounded-2xl p-4',
        'shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]',
        'animate-in slide-in-from-top-2 duration-300',
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn('p-2 rounded-xl flex-shrink-0', config.iconBg)}>
          {displayIcon}
        </div>

        <div className="flex-1 min-w-0">
          {toast.title && (
            <h4 className="text-white font-semibold mb-1">{toast.title}</h4>
          )}
          <p className="text-white/90 text-sm">{toast.message}</p>

          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="mt-3 px-4 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors duration-200"
            >
              {toast.action.label}
            </button>
          )}
        </div>

        {toast.closable !== false && (
          <button
            onClick={() => onClose(toast.id)}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200 flex-shrink-0"
          >
            <IconX />
          </button>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------

const positionMap: Record<ToastPosition, string> = {
  'top-left': 'top-6 left-6',
  'top-right': 'top-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'bottom-right': 'bottom-6 right-6',
  'top-center': 'top-6 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2',
};

export function GlassToastContainer({
  toasts,
  onClose,
  position = 'top-right',
}: GlassToastContainerProps) {
  return (
    <div className={cn('fixed z-50 space-y-3', positionMap[position])}>
      {toasts.map((t) => (
        <GlassToast key={t.id} toast={t} onClose={onClose} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (
      variant: ToastVariant,
      message: string,
      options?: {
        title?: string;
        duration?: number;
        action?: { label: string; onClick: () => void };
        icon?: React.ReactNode;
        closable?: boolean;
      },
    ) => {
      const id = Math.random().toString(36).substring(2, 11);
      setToasts((prev) => [
        ...prev,
        {
          id,
          variant,
          message,
          duration: options?.duration ?? 5000,
          title: options?.title,
          action: options?.action,
          icon: options?.icon,
          closable: options?.closable,
        },
      ]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}
