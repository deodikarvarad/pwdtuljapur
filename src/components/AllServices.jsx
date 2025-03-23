"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Services from './Services';

const AllServices = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 id="Services" className='text-4xl font-semibold mt-10 ml-5 mb-10'>{t('Services Provided')}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-start mx-5 gap-5 my-4">
        <Services provide={t("New works, new construction")} />
        <Services provide={t("Road maintainance work")} />
        <Services provide={t("Building maintainance")} />
        <Services provide={t("Bridge work")} />
        <Services provide={t("New building work")} />
        <Services provide={t("Rent certificate")} />
        <Services provide={t("Valuation of structure")} />
        <Services provide={t("Distance certificate")} />
        <Services provide={t("N/A proposals")} />
        <Services provide={t("MREGS works")} />
        <Services provide={t("2515 works")} />
        <Services provide={t("MLA fund work")} />
        <Services provide={t("DPDC work")} />  
      </div>
    </>
  );
};

export default AllServices;