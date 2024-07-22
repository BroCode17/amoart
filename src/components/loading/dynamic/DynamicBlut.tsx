import { getPlaiceholder } from "plaiceholder"
import Image from "next/image"


export const DynamicBlur = async({src}: {src:any}) => {
    // const buffer = await fs.readFile(`./public${src}`)
    // const {base64} = await getPlaiceholder(buffer)

    const buffer = await fetch(src).then( async(res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const {base64} = await getPlaiceholder(buffer)
   
    return (<div className='min-h-svh'>
        <p>Static </p>
        <div className='relative h-[250px] w-[300px]'>
            <Image src={src}  alt='Blur'
                fill
                sizes='100vw' className='object-cover'
                placeholder="blur"
                blurDataURL={base64}
                />
                
        </div>
    </div>)
}
export const DynamicBlurColor = async({src}: {src:any}) => {
    // const buffer = await fs.readFile(`./public${src}`)
    // const {base64} = await getPlaiceholder(buffer)

    const buffer = await fetch(src).then( async(res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const {color} = await getPlaiceholder(buffer)
   
    return (<div className='min-h-svh'>
        <p>Static </p>
        <div className='relative h-[250px] w-[300px]'>
            <Image src={src}  alt='Blur'
                fill
                sizes='100vw' className='object-cover'
                style={{backgroundColor: color.hex}}
                />
                
        </div>
    </div>)
}