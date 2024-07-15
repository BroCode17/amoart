import Image from 'next/image'
import React from 'react'

const BannerImg = () => {
  return (
    <div className='w-full h-96'>
        <Image src='/images/galley.png' alt='galley' width={259} height={394} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>
  )
}

export default BannerImg