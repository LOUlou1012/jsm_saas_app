"use client" 
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignIn,
  SignOutButton,
  useUser
} from "@clerk/nextjs";


function Navbar() {

    const { isSignedIn } = useUser()

    return (
        <nav className='navbar'>
            <Link href="/">
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <Image 
                        src="/images/logo.svg" 
                        alt='logo' width={46} height={44}
                    />
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <Navitems/>

                {!isSignedIn ? (
            <SignInButton>
                <button className="btn-signin">Sign In</button>
            </SignInButton>
            ) : (
            <UserButton />
            )}
            </div>
        </nav>
    )
}

export default Navbar