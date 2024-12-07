import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { ServicesSection } from './components/ServicesSection';
import { CustomerReviews } from './components/CustomerReviews';
import { HelpSection } from './components/HelpSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { MobileAppPromo } from './components/MobileAppPromo';
import { AccessibilityControls } from './components/AccessibilityControls';
import { Footer } from './components/Footer';
import { SupportPage } from './components/SupportPage';
import { AboutUsPage } from './components/AboutUsPage';
import { PricingPage } from './components/PricingPage';
import { ViziLadie } from './components/ViziLadie';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onNavigate={handleNavigation}
      />
      {currentPage === 'support' ? (
        <SupportPage />
      ) : currentPage === 'about' ? (
        <AboutUsPage />
      ) : currentPage === 'pricing' ? (
        <PricingPage />
      ) : (
        <>
          <Hero />
          <main>
            <InfoCards />
            <ServicesSection />
            <HelpSection />
            <CustomerReviews />
            <GuaranteeSection />
            <MobileAppPromo />
          </main>
        </>
      )}
      <AccessibilityControls />
      <Footer />
      <ViziLadie />
    </div>
  );
}

export default App;