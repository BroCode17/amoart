// 'use client'
// import React, { useCallback } from 'react'
// import { usePathname, useRouter, useSearchParams } from "next/navigation";


// import { useEffect, useState } from "react";
// import Footer from './Footer';
// import Header from './Header';
// import TransitionEffect from './Transition';
// const Main = ({children}: {children: React.ReactNode}) => {
// //     const pathname = usePathname()
// //     const searchParams = useSearchParams()
  
// //     const[url, setUrl] = useState("");

// //   useEffect(() => {
// //     console.log()
// //     const url = `${pathname}?${searchParams}`;
// //     setUrl(url)
// //   }, [pathname, searchParams])
//   const key = Math.floor(Math.random() * 10)
//   return (
//     <div>
//          <Header />
//         <TransitionEffect  key={key} id={key} children={children}/>
//         <Footer />
//     </div>
//   )
// }

// export default Main