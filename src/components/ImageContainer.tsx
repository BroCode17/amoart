import { Row2ImageParam } from '@/types'
import Image from 'next/image'

const ImageContainer = ({imgUrl, text, flag}: Row2ImageParam) => {
  return  <Image src={`/images/${flag ? imgUrl : imgUrl+'.jpeg'}`} alt={text} width={259} height={394} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
}

export default ImageContainer