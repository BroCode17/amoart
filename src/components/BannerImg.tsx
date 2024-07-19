import Image from 'next/image'
import React from 'react'

const BannerImg = ({imageUrl}: {imageUrl: string}) => {
  return (
    <div className='w-full h-96'>
        <Image src={imageUrl} alt='galley' width={259} height={394} style={{width: '100%', height: '100%', objectFit: 'cover'}} className=''/>
    </div>
  )
}

export default BannerImg