import { Row2ImageParam } from "@/types"
import Image from 'next/image'


const ImageContainerTwo = ({imgUrl, text}: Row2ImageParam) => {
    return  <Image src={`/images/${imgUrl.includes('.') ? imgUrl :imgUrl+'.jpeg'}`} alt={text} width={210} height={250} className=" w-full h-full"/>
  }

export default ImageContainerTwo