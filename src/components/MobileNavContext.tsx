// 'use client'
// import { createContext, useContext, useMemo, useState } from "react";


// type MobileNavContextProps = {
//     open: any
//     close: (value: boolean) => void;
// }

// const MobileNavContext = createContext<MobileNavContextProps | null>(null);


// export const MobileNavProvider = ({children}: {children: React.ReactNode}) => {
//     const [showMobileNav, setShowMobileNav] = useState<MobileNavContextProps>(false);

//     const contextValue = useMemo(
//         () => ({
//           open: showMobileNav,
//           close: setShowMobileNav,
//         }),
//         []
//       );
    

//     return <MobileNavContext.Provider value={contextValue}>
//         {children}
//     </MobileNavContext.Provider>
    
// }

// export const useMobileContext = () => useContext(MobileNavContext)
// export default MobileNavContext

