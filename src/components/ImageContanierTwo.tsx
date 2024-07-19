import { Row2ImageParam } from "@/types"
import Image from 'next/image'


const Render = ({imgUrl, text, flag}: Row2ImageParam) => {
  switch(flag){
    case flag === true:
      return (
        <Image src={`/images/${imgUrl+'.png'}`} alt={text} width={210} height={250} className=" w-full h-full object-cover " />
      )
    default:
      return (
        <Image src={`/images/${imgUrl+'.jpeg'}`} alt={text} width={210} height={250} className=" w-full h-full object-cover " />
      )
  }
}

const ImageContainerTwo = ({imgUrl, text, flag}: Row2ImageParam) => {
   
    return  <Render  imgUrl={imgUrl} text={text} flag={flag}/>
  }

export default ImageContainerTwo