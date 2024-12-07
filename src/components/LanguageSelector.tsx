import React from 'react';
import { Globe } from 'lucide-react';
import { supportedLanguages } from '../constants/languages';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto justify-center md:justify-start">
        <Globe className="w-5 h-5" />
        <span>{supportedLanguages.find(lang => lang.code === currentLanguage)?.name}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="max-h-96 overflow-y-auto">
          {supportedLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => onLanguageChange(language.code)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="font-medium">{language.name}</span>
              <span className="text-sm text-gray-500 ml-2">({language.nativeName})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}