"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = ({ provide }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-300 hover:bg-gray-200 rounded-lg font-normal relative shadow-lg py-5 px-5 w-full max-w-md hover:shadow-[0_20px_12px_-10px_rgba(209,213,219,1)]">
      <h1 className="text-black text-xl text-center">{t(provide)}</h1>
    </div>
  );
};

export default Services;