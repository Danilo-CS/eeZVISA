import React, { useState } from 'react';
import { ChevronRight, FileText, Users, Clock } from 'lucide-react';
import { navigationStyles as styles } from '../styles/navigation';

interface ServiceOption {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
}

export function ServiceOptionsMenu() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const serviceOptions: ServiceOption[] = [
    {
      title: 'Do it Yourself',
      icon: <FileText className="w-5 h-5" />,
      href: '#diy',
      description: 'Complete your visa application with step-by-step guidance'
    },
    {
      title: 'Expert Assistance',
      icon: <Users className="w-5 h-5" />,
      href: '#expert',
      description: 'Get professional help throughout your application'
    },
    {
      title: 'Full Service',
      icon: <Clock className="w-5 h-5" />,
      href: '#full-service',
      description: 'Let our experts handle your entire application'
    }
  ];

  return (
    <div className="relative group">
      {/* Desktop Button */}
      <button 
        className={`hidden lg:inline-flex ${styles.navLink} items-center space-x-2`}
        aria-expanded="false"
      >
        <span>Our Services</span>
        <ChevronRight className="w-4 h-4 transform transition-transform group-hover:rotate-90" />
      </button>

      {/* Mobile Button */}
      <button 
        className={`lg:hidden ${styles.mobileNavLink} flex items-center justify-between w-full`}
        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
        aria-expanded={isMobileExpanded}
      >
        <span>Our Services</span>
        <ChevronRight 
          className={`w-4 h-4 transform transition-transform ${
            isMobileExpanded ? 'rotate-90' : ''
          }`} 
        />
      </button>

      {/* Desktop Menu */}
      <div 
        className="hidden lg:block absolute left-0 top-full pt-2 opacity-0 invisible 
                   group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-[400px]">
          {serviceOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 
                       transition-colors group/item"
            >
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-500 
                            group-hover/item:bg-blue-100 transition-colors">
                {option.icon}
              </div>
              <div className="flex-1">
                <span className="block text-gray-900 font-medium mb-1 
                               group-hover/item:text-blue-500 transition-colors">
                  {option.title}
                </span>
                <span className="text-sm text-gray-500">
                  {option.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden space-y-1 overflow-hidden transition-all duration-200 ${
          isMobileExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {serviceOptions.map((option, index) => (
          <a
            key={index}
            href={option.href}
            className="flex items-center space-x-3 px-4 py-2.5 rounded-lg 
                     hover:bg-gray-50 transition-colors"
          >
            <div className="text-blue-500">
              {option.icon}
            </div>
            <div className="flex-1">
              <span className="text-gray-700">{option.title}</span>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}