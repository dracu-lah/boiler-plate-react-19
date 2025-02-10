import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/modules/accounting/_accountingLayout/general-ledger/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=" p-6 h-full flex flex-col items-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        General Ledger
      </h1>
      <p className="text-gray-700 dark:text-gray-400 text-center">
        Manage all financial transactions and records efficiently.
      </p>

      <div className="mt-6 w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">
          Recent Transactions
        </h2>
        <ul className="space-y-3">
          {[
            { id: 1, description: 'Invoice #12345', amount: '$500' },
            { id: 2, description: 'Payment Received', amount: '$200' },
            { id: 3, description: 'Expense: Office Supplies', amount: '$50' },
          ].map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <span>{item.description}</span>
              <span className="font-semibold">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RouteComponent
