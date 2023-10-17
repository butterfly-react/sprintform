import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/authOptions";
import { expenseSchema } from "../../expenseSchema";

export async function GET() {
  const expenses = await prisma.expense.findMany();

  return NextResponse.json(expenses);
}

export async function POST(request: NextRequest) {
  // const session = await getServerSession(authOptions);
  // if (!session)
  //   return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const { summary, category, sum, currency } = body;
  const validation = expenseSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newExpense = await prisma.expense.create({
    data: {
      summary,
      category,
      sum: Number(sum),
      currency,
      paid: new Date(Date.now()),
    },
  });

  return NextResponse.json(newExpense, { status: 201 });
}
