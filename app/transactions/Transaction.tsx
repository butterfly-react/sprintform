'use client'
import React, { useState } from 'react';
import { FaHome, FaPlane, FaUtensils, FaBolt, FaShieldAlt, FaBriefcase, FaHeart, FaWallet, FaTshirt } from 'react-icons/fa';

enum Category {
  HOUSING,
  TRAVEL,
  FOOD,
  UTILITIES,
  INSURANCE,
  HEALTHCARE,
  FINANCIAL,
  LIFESTYLE,
  CLOTHING
}


type Props = {
  expenses?: Expense[];
};

const categoryIcons: Record<Category, JSX.Element> = {
  [Category.HOUSING]: <FaHome />,
  [Category.TRAVEL]: <FaPlane />,
  [Category.FOOD]: <FaUtensils />,
  [Category.UTILITIES]: <FaBolt />,
  [Category.INSURANCE]: <FaShieldAlt />,
  [Category.HEALTHCARE]: <FaBriefcase />,
  [Category.FINANCIAL]: <FaHeart />,
  [Category.LIFESTYLE]: <FaWallet />,
  [Category.CLOTHING]: <FaTshirt />
};

function Transaction({ expenses = [] }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter((expense) =>
    expense.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Expenses</h1>

      <input
        type="text"
        placeholder="Search expenses..."
        className="px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {filteredExpenses.map((expense) => (
      <div key={expense.id} className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center mb-2">
          <div className="text-blue-500 mr-2">
            {/* @ts-ignore */}
            {(categoryIcons as Record<Category, JSX.Element>)[Category[expense.category.toUpperCase()]]}
          </div>
          <h2 className="text-xl font-semibold">{expense.summary}</h2>
        </div>
        <p className="text-gray-600">Category: {expense.category}</p>
        <p className="text-gray-600">
          Amount: {expense.sum} {expense.currency}
        </p>
        <p className="text-gray-600">
          Paid: {new Date(expense.paid).toLocaleDateString('en-GB')}
        </p>
      </div>
    ))}
  </div>
</div>
  );
}

export default Transaction;


