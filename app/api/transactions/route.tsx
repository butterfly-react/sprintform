
import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod'
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import authOptions from '../../auth/authOptions';

const DATA_SOURCE_URL = "https://development.sprintform.com/transactions.json"
const expenseSchema = z.object({

    summary: z.string().min(1).max(255),
    category: z.string().min(1),
    sum: z.number()
  })
  export async function GET() {

      const res = await fetch(DATA_SOURCE_URL)
  
      console.log(res)
  
      const todos: Expense[] = await res.json()
  
      return NextResponse.json(todos)
  }

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({}, { status: 401 });
  
    const body = await request.json();
    const validation = expenseSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });
  
    const newExpense = await prisma.expense.create({
      data: { summary: body.summary, category: body.category, sum: body.sum, currency: body.currency, paid: new Date(body.date)},
    });
  
    return NextResponse.json(newExpense, { status: 201 });
  }

