import React, { useState } from 'react';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { VisaTypesMenu } from './VisaTypesMenu';
import { ServiceOptionsMenu } from './ServiceOptionsMenu';
import { Menu, X } from 'lucide-react';
import { navigationStyles as styles } from '../styles/navigation';

export function Header({ 
  currentLanguage, 
  onLanguageChange,
  onNavigate 
}: { 
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  onNavigate: (page: string) => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg rounded-full px-4 sm:px-6 py-2.5">
          <div className="flex items-center justify-between">
            {/* Logo and Main Navigation */}
            <div className="flex items-center">
              <Logo onNavigate={onNavigate} />
              
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1 ml-6">
                <ServiceOptionsMenu />
                <VisaTypesMenu />
                <button onClick={() => onNavigate('support')} className={styles.navLink}>
                  Support
                </button>
                <button onClick={() => onNavigate('about')} className={styles.navLink}>
                  About Us
                </button>
                <button onClick={() => onNavigate('pricing')} className={styles.navLink}>
                  Pricing
                </button>
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center space-x-3">
              <LanguageSelector
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
              />
              <div className="flex items-center space-x-2">
                <button className={styles.btnSecondary}>
                  Login
                </button>
                <button className={styles.btnPrimary}>
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full mt-2 px-4`}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-4 space-y-2">
                <ServiceOptionsMenu />
                <VisaTypesMenu />
                <button 
                  onClick={() => {
                    onNavigate('support');
                    setIsMenuOpen(false);
                  }}
                  className={`${styles.mobileNavLink} w-full text-left`}
                >
                  Support
                </button>
                <button 
                  onClick={() => {
                    onNavigate('about');
                    setIsMenuOpen(false);
                  }}
                  className={`${styles.mobileNavLink} w-full text-left`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => {
                    onNavigate('pricing');
                    setIsMenuOpen(false);
                  }}
                  className={`${styles.mobileNavLink} w-full text-left`}
                >
                  Pricing
                </button>
              </div>
              
              <div className="border-t border-gray-100 p-4 space-y-2">
                <LanguageSelector
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />
                <div className="grid grid-cols-2 gap-2">
                  <button className={`${styles.btnSecondary} w-full`}>
                    Login
                  </button>
                  <button className={`${styles.btnPrimary} w-full`}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}