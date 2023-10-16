import Link from 'next/link'
import React from 'react'
import { FaCoins} from 'react-icons/fa'

type Props = {}

function NavBar({}: Props) {

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
                links.map(link => <Link key={link.href} className={} href={link.href}>{link.label}</Link>)

            }
        </ul>
    </nav>
  )
}

export default NavBar