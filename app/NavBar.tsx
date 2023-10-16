'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaCoins} from 'react-icons/fa'
import classnames from 'classnames'

type Props = {}

function NavBar({}: Props) {

    const path = usePathname()

    const links = [
        { label: 'Dashboard', href:'/'},
        { label: 'Transactions', href:'/transactions'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><FaCoins /> </Link>
        <p>sprintForm</p>
        <ul className='flex space-x-6'>
            {
                links.map(link => <Link key={link.href} className={classnames(
                    {
                        'text-zinc-900': link.href === path,
                        'text-zinc-500': link.href !== path,
                        'hover:text-zinc-800 transition-colors': true
                    }
                )} href={link.href}>{link.label}</Link>)

            }
        </ul>
    </nav>
  )
}

export default NavBar