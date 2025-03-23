import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
    

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{t('Contact Us')}</h2>
          <p className="text-gray-200">{t('PWDSubdivisionOfficeTuljapur')}</p>
          <p className="text-gray-200">{t('Email Id')}:tuljapur.de@mahapwd.gov.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
