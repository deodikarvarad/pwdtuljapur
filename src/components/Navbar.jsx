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
    <div className="bg-gray-800">
      <header className="fixed inset-x-0 top-0 z-50 bg-gray-800 shadow-md">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          
          {/* Logo Section */}
          <div className="flex flex-1">
            <h1 className="text-xl font-semibold text-white">
              {t('PWDSubdivisionOfficeTuljapur')}
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden text-white focus:outline-none text-4xl mr-[5px]"
          >
            {isMobileMenuOpen ? 'x' : '☰'}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#Services" className="text-lg font-semibold text-white hover:text-gray-300">{t('Services')}</a>
            <a href="#Projects" className="text-lg font-semibold text-white hover:text-gray-300">{t('Projects')}</a>
            <a href="#ContactUs" className="text-lg font-semibold text-white hover:text-gray-300">{t('Contact Us')}</a>
            <a href="#Maps" className="text-lg font-semibold text-white hover:text-gray-300">{t('Maps')}</a>
          </div>

          {/* Language Dropdown Section for Desktop */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="text-sm font-semibold text-white px-4 py-2 bg-gray-700 hover:bg-gray-600 border rounded-md"
            >
              {languages.find((lang) => lang.code === i18n.language)?.label} ▼
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-10 w-32 bg-gray-800 border-2 border-gray-600 rounded-lg shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 text-sm text-white ${
                      i18n.language === lang.code ? 'bg-gray-700' : 'hover:bg-gray-700'
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
            <a href="#Services" className="text-lg font-semibold text-white">{t('Services')}</a>
            <a href="#Projects" className="text-lg font-semibold text-white">{t('Projects')}</a>
            <a href="#ContactUs" className="text-lg font-semibold text-white">{t('Contact Us')}</a>
            <a href="#Maps" className="text-lg font-semibold text-white">{t('Maps')}</a>

            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="text-sm font-semibold text-white px-4 py-2 bg-gray-700 rounded-md"
              >
                {languages.find((lang) => lang.code === i18n.language)?.label} ▼
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-32 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm text-white ${
                        i18n.language === lang.code ? 'bg-gray-700' : 'hover:bg-gray-700'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
