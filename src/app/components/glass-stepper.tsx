import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  label: string;
  description?: string;
}

interface GlassStepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function GlassStepper({ 
  steps, 
  currentStep, 
  orientation = 'horizontal',
  className = '' 
}: GlassStepperProps) {
  if (orientation === 'vertical') {
    return (
      <div className={`space-y-4 ${className}`}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-full
                  backdrop-blur-md backdrop-saturate-150
                  border-2
                  flex items-center justify-center
                  transition-all duration-300
                  ${isCompleted
                    ? 'bg-green-500/30 border-green-400/50'
                    : isCurrent
                    ? 'bg-blue-500/30 border-blue-400/50'
                    : 'bg-white/10 border-white/20'
                  }
                `}>
                  {isCompleted ? (
                    <Check size={20} className="text-white" />
                  ) : (
                    <span className="text-white">{stepNumber}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-px h-12 mt-2 ${isCompleted ? 'bg-green-400/50' : 'bg-white/20'}`} />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h4 className={`${isCurrent ? 'text-white' : 'text-white/70'}`}>
                  {step.label}
                </h4>
                {step.description && (
                  <p className="text-white/60 text-sm mt-1">{step.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isCurrent = stepNumber === currentStep;
        
        return (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div className={`
                w-10 h-10 rounded-full
                backdrop-blur-md backdrop-saturate-150
                border-2
                flex items-center justify-center
                transition-all duration-300
                ${isCompleted
                  ? 'bg-green-500/30 border-green-400/50'
                  : isCurrent
                  ? 'bg-blue-500/30 border-blue-400/50'
                  : 'bg-white/10 border-white/20'
                }
              `}>
                {isCompleted ? (
                  <Check size={20} className="text-white" />
                ) : (
                  <span className="text-white">{stepNumber}</span>
                )}
              </div>
              <div className="text-center">
                <p className={`text-sm ${isCurrent ? 'text-white' : 'text-white/70'}`}>
                  {step.label}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`
                flex-1 h-px mx-4 mb-8
                ${isCompleted ? 'bg-green-400/50' : 'bg-white/20'}
              `} />
            )}
          </div>
        );
      })}
    </div>
  );
}