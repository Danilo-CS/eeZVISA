import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface ProgressTrackerProps {
  steps: Step[];
  currentStep: string;
}

export function ProgressTracker({ steps, currentStep }: ProgressTrackerProps) {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full
                ${step.isCompleted ? 'bg-green-100' : 
                  step.id === currentStep ? 'bg-blue-100' : 'bg-gray-100'}`}>
                {step.isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <Circle className={`w-6 h-6 ${
                    step.id === currentStep ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                )}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">{step.title}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{
                    width: step.isCompleted ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}