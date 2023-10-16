import React from 'react'
import Transaction from './Transaction'

const fetchTransactions = async () => {
  const res = await fetch('https://development.sprintform.com/transactions.json')
  const expenses: Expense [] = await res.json()
  return expenses
}


async function TransactionsPage() {

  const expenses: Expense [] = await fetchTransactions()

  return (
    <main>
      <Transaction expenses={expenses} />
  
  </main>
  )
}

export default TransactionsPage