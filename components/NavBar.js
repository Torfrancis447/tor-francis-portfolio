import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div ClassName='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/Tor-logo.png" alt="/" width='125' height='50'/>
            <div>
                <ul>
                    <Link href='/'>
                        <li> Home </li>
                    </Link>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar