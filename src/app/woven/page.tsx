import React from 'react'
import WovenLabelsHero from '@/components/woven/wovenHero'
import CategorySection from '@/components/woven/CategorySection'
import FoldingGuide from '@/components/woven/CuttingTypes'
import ProductShowcaseCard from '@/components/woven/products'
import CustomLabelProcess from '@/components/woven/uploaddesign'
import LabelApplications from '@/components/woven/IndustriesSection'
import LabelTestimonials from '@/components/woven/Testimonials'
import LabelFAQ from '@/components/woven/FAQ'
import WovenCTA from '@/components/woven/cta'
const About = () => {
  return (
    <div>
      <WovenLabelsHero />
      <CategorySection/>
      <FoldingGuide/>
      <ProductShowcaseCard />
      <CustomLabelProcess />
      <LabelApplications />
      <LabelTestimonials />
      <LabelFAQ />
      <WovenCTA />
    </div>
  )
}

export default About
