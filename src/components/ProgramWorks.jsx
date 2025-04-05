import React from 'react'
import ProjectCard from './ProjectCard'
import { useTranslation } from 'react-i18next';
import office1 from "../assets/office1.jpeg"
import office2 from "../assets/office2.jpeg"
import office3 from "../assets/office3.jpeg"
import office4 from "../assets/office4.jpeg"
import office5 from "../assets/office5.jpeg"
import office6 from "../assets/office6.jpeg"

const ProgramWorks = () => {
   const { t } = useTranslation();

  return (
    <>
    <div className='flex flex-col items-center'>
        <h1 className="text-4xl font-semibold mt-10 ml-5 mb-10">{t('100 Days Program Works')}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 md:px-16 lg:px-52 mb-16">
        <ProjectCard images={[office5]} name={t('Before')} />
        <ProjectCard images={[office3]} name={t('After')} />
        <ProjectCard images={[office6]} name={t('Before')} />
        <ProjectCard images={[office1]} name={t('After')} />
        <ProjectCard images={[office4]} name={t('Before')} />
        <ProjectCard images={[office2]} name={t('After')} />
      </div>
    </>
  )
}

export default ProgramWorks