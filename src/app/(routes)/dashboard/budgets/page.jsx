import React from 'react'
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">My Budgets</h2>
      <BudgetList />
    </div>
  )
}

export default Budget