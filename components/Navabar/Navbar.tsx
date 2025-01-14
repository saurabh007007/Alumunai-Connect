import React from 'react'
import Logo from './Logo'
import { UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center  max-w-7xl mx-auto py-3 ">
        <div>
            <Logo />

        </div>
        <div>
            <UserButton />
        </div>
    </div>
  )
}
