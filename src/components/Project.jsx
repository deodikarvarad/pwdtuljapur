import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/a1.jpeg';
import img2 from '../assets/a2.jpeg';
import img8 from '../assets/aa.jpg';
import img9 from '../assets/ab.jpg';
import img10 from '../assets/b1.jpg';
import img11 from '../assets/b2.jpg';
import img12 from '../assets/c1.jpg';
import img15 from '../assets/d1.jpg';
import img16 from '../assets/abc.jpg';
import img17 from '../assets/abc2.jpg';
import img3 from '../assets/xyz.jpg';
import img4 from '../assets/xyz1.jpg';


const Project = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 id="Projects" className="text-4xl font-semibold mt-10 ml-5 mb-10">{t('Work done by subdivision')}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 md:px-16 lg:px-52 mb-16">
        <ProjectCard images={[img8, img9]} name={t('name1')} />
        <ProjectCard images={[img2, img1]} name={t('name2')} />
        <ProjectCard images={[img10, img11]} name={t('name3')} />
        <ProjectCard images={[img3, img4]} name={t('name4')} />
        <ProjectCard images={[img16, img17]} name={t('name5')} />
        <ProjectCard images={[img15]} name={t('name6')} />
      </div>
    </>
  );
};

export default Project;