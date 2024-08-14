import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../page'
import { redirect, useRouter } from 'next/navigation'

const Protected = ({children}: {children: React.ReactNode}) => {

 const user = useSelector((state:any) => state.user.userData)

 
 useEffect(() => {
    if(user === undefined){
        redirect('/admin')
    }
 }, [user])

  return (
    <div className='w-full'>{user && children}</div>
  )
}

export default Protected