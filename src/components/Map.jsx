"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Maps from '../assets/map.png';

const Map = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold mt-4 ml-5 mb-10'>{t('officeAreaMap')}</h1>
      </div>
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <img src={Maps} alt="Office Area Map" className="w-full max-w-4xl h-auto object-cover" />
      </div>
    </>
  );
};

export default Map;