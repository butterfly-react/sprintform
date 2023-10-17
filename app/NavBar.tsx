'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaCoins} from 'react-icons/fa'
import classnames from 'classnames'
import { useSession } from 'next-auth/react'
import { Box } from '@radix-ui/themes'

type Props = {}

function NavBar({}: Props) {

    const path = usePathname()
    const { status, data: session} = useSession()

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
                links.map(link => 
                    <li key={link.href}>

                        <Link  className={classnames(
                            {
                                'text-zinc-900': link.href === path,
                                'text-zinc-500': link.href !== path,
                                'hover:text-zinc-800 transition-colors': true
                            }
                        )} href={link.href}>{link.label}</Link>
                    </li>
                
                )

            }
        </ul>
        <Box>
            { status === 'authenticated' && <Link href='/api/auth/signout'>Logout</Link>}
            { status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}

        </Box>
    </nav>
  )
}

export default NavBar