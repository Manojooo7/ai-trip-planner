"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'

export const Navbar = () => {

    const paths = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Pricing",
            path: "/pricing"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]

    const {user} = useUser()

  return (
    <div className='bg-white h-7 w-screen flex justify-between align-middle items-center px-5 py-9 shadow-md'>
        <Link href={'./'}>
            <div className="flex gap-3">
                <Image
                    src={"./logo.svg"}
                    alt='Logo'
                    width={24}
                    height={24}
                    
                />
                <h2 className='text-black text-2xl font-bold'>Ai Trip Planner</h2>
            </div>
        </Link>
        <div className="flex gap-8 items-center">
            {paths.map((path, index) =>(
                <Link href={path.path} key={index}>
                    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{path.title}</h2>
                </Link>
            ))}

        </div>

        {!user ? (
            <SignInButton mode='modal'>
                <Button size={'lg'}>Get Started</Button>
            </SignInButton>
        ): (
            <div className="flex gap-3 justify-center align-middle items-center">
                <Link href={'/create-trip'}>
                    <Button>Create New Trip</Button>
                </Link>
                <UserButton/>
            </div>
        )}
    </div>
  )
}
