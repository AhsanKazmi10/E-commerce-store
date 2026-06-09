import React from 'react'
import SatinLabelsSliderHero from '@/components/satinlables/herosatin'
import SatinLabelsPage from '@/components/satinlables/main'
import MaterialSubstrateSuite from '@/components/satinlables/productdetails'
import { Product } from '@/lib/db'
import FlexoPrintedAssets from '@/components/satinlables/productCard'
import AfterProductCards from '@/components/satinlables/murgedsections'
import SatinLabelProcess from '@/components/satinlables/drag&drop'

const Blog = () => {
  return (
    <div>
      <SatinLabelsSliderHero />
      <SatinLabelsPage/>
      <MaterialSubstrateSuite />
      <FlexoPrintedAssets/>
      <SatinLabelProcess/>
      <AfterProductCards/>
      
    </div>
  )
}

export default Blog
