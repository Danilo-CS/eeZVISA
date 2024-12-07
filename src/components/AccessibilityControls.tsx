import React from 'react';
import { Type, ZoomIn, Volume2 } from 'lucide-react';

export function AccessibilityControls() {
  const [fontSize, setFontSize] = React.useState(100);
  const [contrast, setContrast] = React.useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <button
        onClick={() => setFontSize(prev => Math.min(prev + 10, 150))}
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
        aria-label="Increase font size"
      >
        <Type className="w-5 h-5" />
      </button>
      <button
        onClick={() => setContrast(prev => !prev)}
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
        aria-label="Toggle high contrast"
      >
        <ZoomIn className="w-5 h-5" />
      </button>
      <button
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
        aria-label="Enable screen reader"
      >
        <Volume2 className="w-5 h-5" />
      </button>
    </div>
  );
}