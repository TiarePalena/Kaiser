'use client';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export default function StepIndicator({ currentStep, totalSteps, labels }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-10">
      <div className="flex items-center justify-between relative">
        {/* Progress line background */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0" />
        {/* Progress line filled */}
        <div
          className="absolute top-5 left-0 h-0.5 bg-kaiser-teal z-0 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />

        {labels.map((label, index) => {
          const step = index + 1;
          const isActive = step === currentStep;
          const isComplete = step < currentStep;

          return (
            <div key={step} className="flex flex-col items-center relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300
                  ${isComplete
                    ? 'bg-kaiser-teal border-kaiser-teal text-white'
                    : isActive
                      ? 'bg-white border-kaiser-teal text-kaiser-teal shadow-lg scale-110'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
              >
                {isComplete ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={`mt-2 text-xs font-semibold text-center max-w-[100px] transition-colors duration-300
                  ${isActive ? 'text-kaiser-teal' : isComplete ? 'text-kaiser-dark' : 'text-gray-400'}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
