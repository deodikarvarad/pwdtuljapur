import React from 'react';
import MapCard from './MapCard';
import { useTranslation } from 'react-i18next';

const GoogleMaps = () => {
    const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 id="Maps" className="text-4xl font-semibold mt-4 mb-10">{t('Maps')}</h1>
      </div>
      
      {/* Two Maps Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-52 px-5 mb-10">
        {/* First Map */}
        <MapCard
          name={t('PWD Office')}
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.3973950021887!2d76.0700335!3d18.006751899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5be0ec41e6f8b%3A0x8383da92accb5f34!2sPWD%20Office!5e0!3m2!1sen!2sin!4v1742711588038!5m2!1sen!2sin"
        />
        
        {/* Second Map (You can add another link) */}
        <MapCard
          name={t('Circuit House')}
           mapSrc="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3794.4898166929515!2d76.06618437517922!3d18.002457982993356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDAwJzA4LjkiTiA3NsKwMDQnMDcuNSJF!5e0!3m2!1sen!2sin!4v1742714313103!5m2!1sen!2sin"
        />
      </div>
    </>
  );
};

export default GoogleMaps;
