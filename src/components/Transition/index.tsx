"use client"
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

const TransitionEffect = (props: any) => {
    const [displayChildren, setDisplayChildren] = useState(props);
    const container = useRef(null)
    // useGSAP(() => {
    //     // setInterval(() => {
    //     //     setDisplayChildren(children)
    //     // }, 1000) 
    //     if(props.id  !== displayChildren.id){
    //         console.log('Yes')
    //         gsap.to(container.current, {opacity: 0}).then(() => {
    //             setDisplayChildren(props)
    //         })
    //     }
        
    // }, [props])
    
  return (
    <div ref={container}>
        {displayChildren.children}
    </div>
  )
}

export default TransitionEffect