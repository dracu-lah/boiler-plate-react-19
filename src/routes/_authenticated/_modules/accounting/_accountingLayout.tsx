import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Sidebar } from "./-components/layout/Sidebar";

export const Route = createFileRoute(
  "/_authenticated/_modules/accounting/_accountingLayout",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow p-6">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
}
