import { Ink_Free } from '@/app/local-fonts/local'
import { cn } from '@/lib/utils'
import React from 'react'

const Logo = ({className} :{ className?: string}) => {
  return (
    <h1 className={cn(`${Ink_Free.className} text-2xl`, className)}>Amo.arte</h1>
  )
}

export default Logo