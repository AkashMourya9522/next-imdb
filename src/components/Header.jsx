import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex p-5 justify-between font-semibold text-lg'>
        <ul className='flex gap-5'>
            <li>
                <Link href={'/sign-in'}>Sign In</Link>
            </li>
            <li className='hidden sm:block'>
                <Link href={'/'}>Home</Link>
            </li>
            <li className='hidden sm:block'>
                <Link href={'/favourites'}>Favourites</Link>
            </li>
            <li className='hidden sm:block'>
                <Link href={'/about'}>About</Link>
            </li>
        </ul>
        <div>
            <Link className='text-orange-400 text-xl' href={'/'}>
            <span className=''>IMDB </span>
            <span className='hidden sm:block'>Clone</span>
            </Link>
        </div>
    </div>
  )
}

export default Header