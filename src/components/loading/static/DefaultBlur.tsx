import React from 'react'
import Image from 'next/image'
import Picture from '../../../../public/images/five.jpeg'
import Pic from '/images/five.jpeg'
import {getPlaiceholder} from 'plaiceholder'
import fs from 'node:fs/promises'


export const DefaultBlur = async () => {

  

  return (
    <div className='min-h-svh'>
        <p>Blur</p>
        <div className='relative h-[250px] w-[300px]'>
            <Image src={Picture}  alt='Blur'
                fill
                sizes='100vw' className='object-cover'
                placeholder='blur'
                />
                
        </div>
    </div>
  )
}

export const StaticBlur = async({src}: {src:any}) => {
    const buffer = await fs.readFile(`./public${src}`)
    const {base64} = await getPlaiceholder(buffer)
   
    return (<div className='min-h-svh'>
        <p>Static </p>
        <div className='relative h-[250px] w-[300px]'>
            <Image src={Picture}  alt='Blur'
                fill
                sizes='100vw' className='object-cover'
                placeholder='blur'
                blurDataURL={base64}
                />
                
        </div>
    </div>)
}
export const StaticBlurColor = async({src}: {src:any}) => {
    const buffer = await fs.readFile(`./public${src}`)
    const {color} = await getPlaiceholder(buffer)
   
    return (<div className='min-h-svh'>
        <p>Color </p>
        <div className='relative h-[250px] w-[300px]'>
            <Image src={src}  alt='Blur'
                fill
                sizes='100vw' className='object-cover'
              
               style={{backgroundImage: color.hex}}
                />
                
        </div>
    </div>)
}