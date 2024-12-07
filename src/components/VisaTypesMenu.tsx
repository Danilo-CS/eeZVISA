import React, { useState } from 'react';
import { ChevronRight, Plane, GraduationCap, Briefcase, Home, Users, FileText } from 'lucide-react';
import { navigationStyles as styles } from '../styles/navigation';

interface VisaType {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
}

export function VisaTypesMenu() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const visaTypes: VisaType[] = [
    { 
      title: 'Tourism & Visit',
      icon: <Plane className="w-5 h-5" />,
      href: '#tourism',
      description: 'Short-term stays for leisure and family visits'
    },
    { 
      title: 'Study & Exchange',
      icon: <GraduationCap className="w-5 h-5" />,
      href: '#study',
      description: 'Academic programs and student exchanges'
    },
    { 
      title: 'Business',
      icon: <Briefcase className="w-5 h-5" />,
      href: '#business',
      description: 'Business travel and commercial activities'
    },
    { 
      title: 'Immigrate',
      icon: <Home className="w-5 h-5" />,
      href: '#immigrate',
      description: 'Permanent residence and immigration'
    },
    { 
      title: 'Employment',
      icon: <Users className="w-5 h-5" />,
      href: '#employment',
      description: 'Work permits and employment visas'
    },
    { 
      title: 'Other Categories',
      icon: <FileText className="w-5 h-5" />,
      href: '#other',
      description: 'Special visa types and programs'
    }
  ];

  return (
    <div className="relative group">
      {/* Desktop Button */}
      <button 
        className={`hidden lg:inline-flex ${styles.navLink} items-center space-x-2`}
        aria-expanded="false"
      >
        <span>Visa Types</span>
        <ChevronRight className="w-4 h-4 transform transition-transform group-hover:rotate-90" />
      </button>

      {/* Mobile Button */}
      <button 
        className={`lg:hidden ${styles.mobileNavLink} flex items-center justify-between w-full`}
        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
        aria-expanded={isMobileExpanded}
      >
        <span>Visa Types</span>
        <ChevronRight 
          className={`w-4 h-4 transform transition-transform ${
            isMobileExpanded ? 'rotate-90' : ''
          }`} 
        />
      </button>

      {/* Desktop Mega Menu */}
      <div 
        className="hidden lg:block absolute left-0 top-full pt-2 opacity-0 invisible 
                   group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <div className="grid grid-cols-2 gap-6 w-[600px]">
            {visaTypes.map((type, index) => (
              <a
                key={index}
                href={type.href}
                className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 
                         transition-colors group/item"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-500 
                              group-hover/item:bg-blue-100 transition-colors">
                  {type.icon}
                </div>
                <div className="flex-1">
                  <span className="block text-gray-900 font-medium mb-1 
                                 group-hover/item:text-blue-500 transition-colors">
                    {type.title}
                  </span>
                  <span className="text-sm text-gray-500">
                    {type.description}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu List */}
      <div 
        className={`lg:hidden space-y-1 overflow-hidden transition-all duration-200 ${
          isMobileExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {visaTypes.map((type, index) => (
          <a
            key={index}
            href={type.href}
            className="flex items-center space-x-3 px-4 py-2.5 rounded-lg 
                     hover:bg-gray-50 transition-colors"
          >
            <div className="text-blue-500">
              {type.icon}
            </div>
            <div className="flex-1">
              <span className="text-gray-700">{type.title}</span>
              <p className="text-sm text-gray-500">{type.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}