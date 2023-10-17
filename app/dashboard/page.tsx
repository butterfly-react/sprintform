import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import Transaction from "../transactions/Transaction";

type Props = {};

const fetchExpenses = async () => {
  const res = await fetch("http://localhost:3000/api/transactions");
  const expenses: Expense[] = await res.json();
  return expenses;
};

async function DashboardPage({}: Props) {
  const expenses: Expense[] = await fetchExpenses();

  return (
    <div>
      <div className="mx-4">
        <Transaction expenses={expenses} />
      </div>

      <div className="my-4">
        <Button>
          <Link href="/transactions/new">New Expense</Link>
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
