'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
          <TextField.Input placeholder='Summary' />

        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='Category' />

        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='Currency' />

        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder='Sum' />

        </TextField.Root>
        <TextArea placeholder='Description'>
          </TextArea> 
          <Button>Submit new Expense</Button>
    </div>
  )
}

export default page