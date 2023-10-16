import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

type Props = {}

function DashboardPage({}: Props) {
  return (
    <div>
        <Button><Link href='/transactions/new'>New Expense</Link></Button>
    </div>
  )
}

export default DashboardPage