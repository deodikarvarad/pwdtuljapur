import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'mr', label: 'मराठी' }
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo Section */}
          <div className="flex flex-1">
            <h1 className="text-xl font-semibold text-gray-900">
              {t('PWDSubdivisionOfficeTuljapur')}
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#Services" className="text-lg font-semibold text-gray-900">{t('Services')}</a>
            <a href="#Projects" className="text-lg font-semibold text-gray-900">{t('Projects')}</a>
            <a href="#Contact Us" className="text-lg font-semibold text-gray-900">{t('Contact Us')}</a>
            <a href="#Maps" className="text-lg font-semibold text-gray-900">{t('Maps')}</a>
          </div>

          {/* Language Dropdown Section */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-sm font-semibold text-gray-900 px-4 py-2 bg-gray-100 rounded-md"
            >
              {languages.find((lang) => lang.code === i18n.language)?.label} ▼
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language === lang.code ? 'bg-gray-200' : 'hover:bg-gray-100'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-center py-4 space-y-4">
            <a href="#Services" className="text-lg font-semibold text-gray-900">{t('Services')}</a>
            <a href="#Projects" className="text-lg font-semibold text-gray-900">{t('Projects')}</a>
            <a href="#Contact Us" className="text-lg font-semibold text-gray-900">{t('Contact Us')}</a>
            <a href="#Maps" className="text-lg font-semibold text-gray-900">{t('Maps')}</a>
          </div>
        )}
      </header>
    </div>
  );
}