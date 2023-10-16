"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter} from 'next/navigation'


interface ExpenseForm {
  summary: string
  category: string
  currency: string
  sum: number
  description: string
}

type Props = {};

function NewExpensePage({}: Props) {

  const {register, control, handleSubmit} = useForm<ExpenseForm>()

  const router = useRouter()

  return (
    <form className="max-w-xl space-y-3" 
    onSubmit={handleSubmit(async (data) => {
      await axios.post('/api/transactions', data)
      router.push('/dashboard')
    })}>

<div className="relative">
    <select {...register('category')} className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
      <option value="HOUSING">HOUSING</option>
      <option value="TRAVEL">TRAVEL</option>
      <option value="FOOD">FOOD</option>
      <option value="UTILITIES">UTILITIES</option>
      <option value="INSURANCE">INSURANCE</option>
      <option value="HEALTHCARE">HEALTHCARE</option>
      <option value="FINANCIAL">FINANCIAL</option>
      <option value="LIFESTYLE">LIFESTYLE</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L10.586 9H3a1 1 0 0 0 0 2h7.586l-1.293 1.293z"/></svg>
    </div>
  </div> 
 
      <TextField.Root>
        <TextField.Input placeholder="Currency" {...register('currency')}/>
      </TextField.Root>
      <TextField.Root>
        <TextField.Input placeholder="Sum" {...register('sum')}/>
      </TextField.Root>
      <Controller name='summary'
      control={control} render={({ field }) =>  <SimpleMDE placeholder="Summary" {...field}></SimpleMDE>}/>
    
      <Button>New Transaction</Button>
    </form>
  );
}

export default NewExpensePage;
