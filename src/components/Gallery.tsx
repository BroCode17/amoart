import React from 'react'
import BannerImg from './BannerImg'
import HeadTitle from './HeadTitle'

const Gallery = () => {
  return (
    <div>
        <div className='w-full relative'>
            <BannerImg />
            <div className='absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
                <HeadTitle title='Gallery' className='text-white text-center'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery