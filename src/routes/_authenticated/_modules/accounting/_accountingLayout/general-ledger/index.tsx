import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/_modules/accounting/_accountingLayout/general-ledger/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen p-6  flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">General Ledger</h1>
      <p className="text-gray-700">
        Manage all financial transactions and records.
      </p>
      <div className="mt-6 w-full max-w-lg bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <ul className="space-y-2">
          <li className="p-2 border rounded-md">Invoice #12345 - $500</li>
          <li className="p-2 border rounded-md">Payment Received - $200</li>
          <li className="p-2 border rounded-md">
            Expense: Office Supplies - $50
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RouteComponent;
