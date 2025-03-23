"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ name, post, mobile, email, image }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center p-7 rounded-2xl bg-gray-200 hover:bg-gray-300 px-2 w-full max-w-md hover:translate-y-[-10px] ease-out hover:border hover:shadow-[0_20px_12px_-10px_rgba(209,213,219,1)]">
        
        {/* Image and Post Section */}
        <div className="flex flex-col justify-center items-center">
          {image && <img className="size-48 shadow-xl rounded-md" alt={name} src={image} />}
          <span className="text-2xl font-medium hover:text-gray-600 mt-2">{post}</span>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col mt-4 w-full items-start">
          <span className="font-medium hover:text-gray-600">{t('Name')} : {t(name)}</span>
          <span className="font-medium hover:text-gray-600">{t('Mobile No')} : {mobile}</span>
          <span className="font-medium hover:text-gray-600">{t('Email Id')} : {email}</span>
        </div>
      </div>
    </>
  );
};

export default Card;