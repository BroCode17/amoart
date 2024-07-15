import { Row2ImageParam } from "@/types"
import Image from 'next/image'


const ImageContainerTwo = ({imgUrl, text, flag}: Row2ImageParam) => {
    return  <Image src={`/images/${flag===true ? imgUrl+'.png' : imgUrl+'.jpeg'}`} alt={text} width={210} height={250} className=" w-full h-full"/>
  }

export default ImageContainerTwo