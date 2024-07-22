import GenericBanner from '@/components/banner/GenericBanner'
import Gallery from '@/components/Gallery'
import { CustomBlur } from '@/components/loading/coutom/CustomBlur'
import { DynamicBlur } from '@/components/loading/dynamic/DynamicBlut'
import {DefaultBlur, StaticBlur, StaticBlurColor} from '@/components/loading/static/DefaultBlur'

import React from 'react'

const page = () => {
  return (
    <div className='min-h-svh'>
        <GenericBanner bannerImgUrl="/images/galley.png" bannerTitle="Gallery" />
        <Gallery />   
    </div>
  )
}

export default page