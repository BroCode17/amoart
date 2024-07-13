import React from 'react'
import { imagesArray } from '../../utils/data'
import { StaticImageData } from 'next/image'
const C = () => {
  return (
   <div>
     {/* <div className='flex'>
        {imagesArray.map((item, index) => (
            <div key={index} className='w-full flex-shrink-0'>        
                <img src={item.src} style={{height: '100%', width: '100%'}}   className='w-full' />
            </div>
        ))}
    </div> */}
   </div>
  )
}

export default C