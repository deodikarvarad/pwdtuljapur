import React from 'react';
import Card from './Card';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Title Section */}
      <div className="flex flex-col items-center">
        <h1 id="ContactUs" className="text-4xl font-semibold mt-10 mb-10">{t('Contact Us')}</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 mb-10">
        <Card name={t('V.Y.Awale')} post={t('Sub Divisional Engineer')} mobile="9921067744" email="vijayawale@gmail.com" />
        <Card name={t('S.S.Patule')} post={t('Sectional Engineer')} mobile="9420031968" email="patuless@gmail.com" />
        <Card name={t('S.V.Shivgunde')} post={t('Sectional Engineer')} mobile="9850040045" email="sujay1703@gmail.com" />
        <Card name={t('O.K.Kulkarni')} post={t('Junior Engineer')} mobile="8275432025" email="okkulkarni97@gmail.com" />
        <Card name={t('A.L.Dum')} post={t('Junior Engineer')} mobile="8668852757" email="amitdum77@gmail.com" />
        <Card name={t('G.A.Mali')} post={t('Civil Engineering Assistant')} mobile="9764008550" email="ganeshmalipwd@gmail.com" />
        <Card name={t('R.B.Kokate')} post={t('Civil Engineering Assistant')} mobile="8788703436" email="kokateravindra@gmail.com" />
        <Card name={t('A.S.Mane')} post={t('Civil Engineering Assistant')} mobile="9403596029" email="maneakshay@gmail.com" />
        <Card name={t('R.L.Malale')} post={t('Senior Clerk')} mobile="9421357726" email="ratnakantmalale@gmail.com" />
        <Card name={t('R.S.Gaikwad')} post={t('Civil Engineering Assistant')} mobile="8446390887" email="gaikwad141982@gmail.com" />
        <Card name={t('S.V.Shinde')} post={t('Peon')} mobile="9637977152" email="-" />
        <Card name={t('P.S.Kumbhar')} post={t('Watchman')} mobile="9172159889" email="-" />
        <Card name={t('D.D.Dhanke')} post={t('Cleaner')} mobile="9421679696" email="-" />
        <Card name={t('A.C.Shaikh')} post={t('Sanitation Worker')} mobile="7798680623" email="-" />
      </div>
    </>
  );
};

export default ContactUs;
